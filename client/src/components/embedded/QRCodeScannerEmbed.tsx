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
      
      const constraints = {
        video: { 
          facingMode: 'environment', 
          width: { ideal: 720 },
          height: { ideal: 720 }
        }
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsCameraActive(true);
        
        // Start scanning for QR codes at regular intervals
        scanIntervalRef.current = window.setInterval(() => {
          captureAndScanFrame();
        }, 500); // Scan every 500ms
      }
    } catch (error) {
      console.error('Error starting camera:', error);
      const errorMessage = 'Failed to access camera. Please check your camera permissions or try uploading an image instead.';
      setCameraError(errorMessage);
      onError?.(errorMessage);
      toast({
        variant: "destructive",
        description: errorMessage,
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
      
      // Scan for QR code using jsQR
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
      
      if (code) {
        // QR code found - stop camera and process result
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
      
      // Create an Image element to load the data URL
      const img = new Image();
      
      // Set up promise to handle image loading
      const imageLoadPromise = new Promise<HTMLImageElement>((resolve, reject) => {
        img.onload = () => resolve(img);
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
      
      // Get image data for QR code scanning
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      
      // Scan for QR code using jsQR
      const code = jsQR(imgData.data, imgData.width, imgData.height, {
        inversionAttempts: 'dontInvert'
      });
      
      if (code) {
        // Stop scanning if we found a result
        if (isCameraActive) {
          stopCamera();
        }
        
        // Process the QR code data
        handleQrCodeResult(code.data);
      } else {
        throw new Error('No QR code found in the image');
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
    <div className="space-y-4 text-slate-900">
      <div className="max-w-md mx-auto">
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
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                />
                
                {/* Loading indicator while analyzing */}
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
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