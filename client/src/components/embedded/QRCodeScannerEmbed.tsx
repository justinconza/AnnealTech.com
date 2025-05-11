import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Camera, Upload, RotateCcw, Loader2, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import jsQR from 'jsqr';

// Modern, professional theme styles with #0d4f86 blue
const blueTheme = {
  button: 'bg-[#0d4f86] hover:bg-[#0a3d68] text-white',
  outlineButton: 'border-[#0d4f86]/30 hover:bg-[#0d4f86]/10 text-[#0d4f86]',
  card: 'bg-white border border-[#0d4f86]/20 shadow-sm rounded-lg',
  heading: 'text-[#0d4f86] font-semibold',
  accent: 'text-[#0d4f86]',
  iconBackground: 'bg-[#0d4f86]/10 border border-[#0d4f86]/20'
};

interface QRCodeScannerEmbedProps {
  onDetected: (url: string, decodedText: string) => void;
  onError?: (error: string) => void;
}

export default function QRCodeScannerEmbed({ onDetected, onError }: QRCodeScannerEmbedProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scanIntervalRef = useRef<number | null>(null);

  // Handle camera cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
      if (scanIntervalRef.current) {
        clearInterval(scanIntervalRef.current);
      }
    };
  }, []);

  // Start the camera feed
  const startCamera = async () => {
    try {
      setCameraError(null);
      
      if (!navigator.mediaDevices) {
        throw new Error("Camera access is not supported in this browser");
      }
      
      console.log('Attempting to access camera...');
      
      // First try with ideal settings
      const constraints = {
        video: { 
          facingMode: 'environment', 
          width: { ideal: 720 },
          height: { ideal: 720 }
        }
      };
      
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setIsCameraActive(true);
          
          console.log('Camera started successfully, setting up QR scanning');
          
          // Start scanning for QR codes at regular intervals
          scanIntervalRef.current = window.setInterval(() => {
            captureAndScanFrame();
          }, 500); // Scan every 500ms
        }
      } catch (initialError) {
        console.error('Error with preferred camera:', initialError);
        
        // Fall back to any camera if specific camera fails
        try {
          console.log('Trying fallback camera settings...');
          const fallbackStream = await navigator.mediaDevices.getUserMedia({ video: true });
          
          if (videoRef.current) {
            videoRef.current.srcObject = fallbackStream;
            videoRef.current.play();
            setIsCameraActive(true);
            
            // Start scanning for QR codes at regular intervals
            scanIntervalRef.current = window.setInterval(() => {
              captureAndScanFrame();
            }, 500); // Scan every 500ms
          }
        } catch (fallbackError) {
          // Both attempts failed
          throw fallbackError;
        }
      }
    } catch (error) {
      console.error('Error starting camera:', error);
      
      // Note: Camera access typically fails in Replit environment
      const errorMessage = 'Failed to access camera. Please try uploading an image instead.';
      setCameraError(errorMessage);
      onError?.(errorMessage);
      toast({
        variant: "destructive",
        description: "Camera access isn't available. Please upload a QR code image instead.",
      });
    }
  };

  // Stop the camera feed
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    
    if (scanIntervalRef.current) {
      clearInterval(scanIntervalRef.current);
      scanIntervalRef.current = null;
    }
    
    setIsCameraActive(false);
  };

  // Capture a frame from the video and scan it
  const captureAndScanFrame = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    // Check if video is ready
    if (videoRef.current.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Match canvas size to video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw the current video frame to the canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    try {
      // Get image data directly from canvas for QR code scanning
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      
      console.log('Attempting to scan frame: ', canvas.width, 'x', canvas.height);
      
      // Scan for QR code using jsQR with multiple inversion attempts
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'attemptBoth'  // Try both inverted and non-inverted
      });
      
      if (code) {
        // QR code found - stop camera and process result
        console.log('QR Code detected:', code.data);
        stopCamera();
        handleQrCodeResult(code.data);
      }
    } catch (error) {
      console.error('Error capturing frame:', error);
    }
  };

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Reset any previous errors
    setCameraError(null);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target?.result as string;
      setUploadedImage(imageDataUrl);
    };
    reader.readAsDataURL(file);
  };

  // Scan the uploaded image
  const scanUploadedImage = async () => {
    if (!uploadedImage) return;
    setIsAnalyzing(true);
    scanImageOnServer(uploadedImage);
  };

  // Process image data with jsQR
  const scanImageOnServer = async (imageData: string) => {
    // Don't make multiple requests simultaneously
    if (isAnalyzing) return;
    
    try {
      setIsAnalyzing(true);
      console.log('Starting image analysis...');
      
      // Create an Image element to load the data URL
      const img = new Image();
      
      // Set up promise to handle image loading
      const imageLoadPromise = new Promise<HTMLImageElement>((resolve, reject) => {
        img.onload = () => {
          console.log('Image loaded successfully:', img.width, 'x', img.height);
          resolve(img);
        };
        img.onerror = (e) => reject(new Error('Failed to load image'));
      });
      
      // Set the source to the data URL
      img.src = imageData;
      
      // Wait for the image to load
      const loadedImg = await imageLoadPromise;
      
      // Create a canvas to draw the image
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        throw new Error('Could not create canvas context');
      }
      
      // Set canvas dimensions to match image
      canvas.width = loadedImg.width;
      canvas.height = loadedImg.height;
      
      // Draw image onto canvas
      ctx.drawImage(loadedImg, 0, 0);
      console.log('Image drawn to canvas:', canvas.width, 'x', canvas.height);
      
      // Get image data for QR code scanning
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      console.log('Image data obtained, pixel array length:', imgData.data.length);
      
      // Try with different settings
      let code = null;
      
      // First attempt - standard
      code = jsQR(imgData.data, imgData.width, imgData.height, {
        inversionAttempts: 'attemptBoth'
      });
      
      // If not found, try a different approach - resize the image
      if (!code && canvas.width > 1000) {
        console.log('Trying scaled down image...');
        const scaledCanvas = document.createElement('canvas');
        const scaledCtx = scaledCanvas.getContext('2d');
        
        if (scaledCtx) {
          // Scale down to 800px width
          const scale = 800 / canvas.width;
          scaledCanvas.width = 800;
          scaledCanvas.height = Math.floor(canvas.height * scale);
          
          // Draw scaled image
          scaledCtx.drawImage(loadedImg, 0, 0, scaledCanvas.width, scaledCanvas.height);
          
          // Get scaled image data
          const scaledImgData = scaledCtx.getImageData(0, 0, scaledCanvas.width, scaledCanvas.height);
          
          // Try QR scan on scaled image
          code = jsQR(scaledImgData.data, scaledCanvas.width, scaledCanvas.height, {
            inversionAttempts: 'attemptBoth'
          });
        }
      }
      
      if (code) {
        console.log('QR Code detected:', code.data);
        // Stop scanning if we found a result
        if (isCameraActive) {
          stopCamera();
        }
        
        // Process the QR code data
        handleQrCodeResult(code.data);
      } else {
        console.error('No QR code found in the image after multiple attempts');
        throw new Error('No QR code found in the image. Please try a clearer image or a different QR code.');
      }
    } catch (error: any) {
      console.error('Error scanning QR code:', error);
      // Don't show error toast during continuous camera scanning to avoid spam
      if (!isCameraActive) {
        const errorMessage = error?.message || 'Could not detect a valid QR code in the image.';
        onError?.(errorMessage);
        toast({
          variant: "destructive",
          description: "Could not detect a valid QR code. Please try again with a clearer image.",
        });
        
        // Log detailed error for debugging
        if (error?.response) {
          console.error('Error response:', error.response.data);
        }
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Handle successful QR code detection
  const handleQrCodeResult = (decodedText: string) => {
    let url = decodedText;
    
    // Add https:// prefix if it looks like a URL without protocol
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      if (!url.match(/^[a-zA-Z]+:\/\//)) {
        if (url.includes('.') && !url.includes(' ')) {
          url = 'https://' + url;
        }
      }
    }
    
    // Pass result to parent component
    onDetected(url, decodedText);
  };

  // Clean up when user wants to try another image
  const resetUploadedImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4 text-slate-900 w-full h-full flex-grow">
      <div className="max-w-md mx-auto w-full">
        {!isCameraActive && !uploadedImage && (
          <div className={cn("p-6 text-center mb-4", blueTheme.card)}>
            <div className="mb-4 flex justify-center">
              <div className={cn("w-16 h-16 rounded-full flex items-center justify-center", blueTheme.iconBackground)}>
                <QrCode className={cn("w-8 h-8", blueTheme.accent)} />
              </div>
            </div>
            <h3 className={cn("text-lg mb-3 font-semibold", blueTheme.heading)}>Scan a QR Code</h3>
            <p className="text-slate-900 mb-5 text-base">
              Use your device camera to scan a QR code or upload an image containing a QR code
            </p>
            
            {cameraError && (
              <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm text-left">
                {cameraError}
              </div>
            )}
            
            <div className="flex flex-col gap-3 justify-center">
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-2">
                <Button
                  type="button"
                  className={cn(blueTheme.button, "px-5 py-6")}
                  onClick={startCamera}
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Start Camera
                </Button>
                <div className="relative">
                  <Input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className={cn("border px-5 py-6", blueTheme.outlineButton)}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Image
                  </Button>
                </div>
              </div>
              
              <div className="mt-2 text-center">
                <p className="text-xs text-muted-foreground mb-2">
                  Having trouble with your QR code? Try our sample:
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => {
                    const sampleQRCode = "data:image/png;base64,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";
                    setUploadedImage(sampleQRCode);
                    // Auto scan after a short delay
                    setTimeout(() => {
                      scanImageOnServer(sampleQRCode);
                    }, 500);
                  }}
                >
                  Use Sample QR Code
                </Button>
              </div>
            </div>
          </div>
        )}

        {isCameraActive && (
          <div className={cn("p-4 text-center mb-4", blueTheme.card)}>
            <div className="aspect-square relative max-w-xs mx-auto overflow-hidden rounded-md bg-black">
              {/* Video element for camera stream */}
              <video 
                ref={videoRef} 
                className="w-full h-full object-cover"
                playsInline
                muted
              ></video>
              
              {/* Canvas for capturing frames (hidden) */}
              <canvas 
                ref={canvasRef}
                className="hidden"
              ></canvas>
              
              {/* QR code scanning frame guide */}
              <div className="absolute inset-0 border-2 border-dashed border-[#0d4f86] animate-pulse opacity-70 pointer-events-none">
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#0d4f86]"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#0d4f86]"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#0d4f86]"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#0d4f86]"></div>
              </div>
              
              {/* Loading indicator while analyzing */}
              {isAnalyzing && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="p-3 bg-white rounded-full">
                    <Loader2 className="h-6 w-6 animate-spin text-[#0d4f86]" />
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4">
              <Button 
                type="button"
                variant="outline"
                className={cn("border mt-2 px-5 py-2", blueTheme.outlineButton)}
                onClick={stopCamera}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Cancel Scanning
              </Button>
            </div>
          </div>
        )}

        {uploadedImage && (
          <div className={cn("p-4 text-center mb-4", blueTheme.card)}>
            <div className="space-y-4">
              <div className="relative mx-auto w-full max-w-xs aspect-square overflow-hidden rounded-md border bg-white">
                <img 
                  src={uploadedImage} 
                  alt="Uploaded QR Code" 
                  className="h-full w-full object-contain"
                  onLoad={() => {
                    console.log('Image loaded in DOM');
                  }}
                />
                
                {/* Loading indicator while analyzing */}
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="p-3 bg-white rounded-full">
                      <Loader2 className="h-6 w-6 animate-spin text-[#0d4f86]" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex justify-center space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  className={cn("border px-4 py-2", blueTheme.outlineButton)}
                  onClick={resetUploadedImage}
                  disabled={isAnalyzing}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Try Another
                </Button>
                
                <Button
                  type="button"
                  className={cn(blueTheme.button, "px-4 py-2")}
                  onClick={scanUploadedImage}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <QrCode className="mr-2 h-4 w-4" />
                      Scan QR Code
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}