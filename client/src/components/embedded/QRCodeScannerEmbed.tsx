import React, { useState, useRef, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { cn } from '@/lib/utils';
import { Camera, Upload, RotateCcw, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

// Modern, professional theme styles - lighter, blue-focused design
const modernThemeStyles = {
  background: 'bg-slate-50 dark:bg-slate-950',
  text: 'text-slate-700 dark:text-slate-200',
  heading: 'text-blue-700 dark:text-blue-200 font-semibold',
  card: 'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200',
  button: 'bg-blue-600 hover:bg-blue-700 text-white',
  outlineButton: 'border-blue-200 hover:bg-blue-50 text-blue-600 dark:border-blue-800 dark:hover:bg-blue-900/20 dark:text-blue-300',
  accent: 'text-blue-600 dark:text-blue-300',
  navbar: 'bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 shadow-sm',
  iconBackground: 'bg-blue-50 dark:bg-blue-900/30'
};

interface QRCodeScannerEmbedProps {
  onDetected: (url: string, decodedText: string) => void;
  onError?: (error: string) => void;
}

export default function QRCodeScannerEmbed({ onDetected, onError }: QRCodeScannerEmbedProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const qrBoxSize = 250;
  const scannerContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

  // Initialize scanner and clean up on unmount
  useEffect(() => {
    // Initialize scanner if needed
    if (!html5QrCodeRef.current && scannerContainerRef.current) {
      const scannerId = `qr-reader-init-${Date.now()}`;
      scannerContainerRef.current.id = scannerId;
      html5QrCodeRef.current = new Html5Qrcode(scannerId);
    }

    // Clean up scanner on unmount
    return () => {
      if (html5QrCodeRef.current) {
        if (html5QrCodeRef.current.isScanning) {
          html5QrCodeRef.current.stop()
            .catch(error => {
              console.error('Error stopping QR scanner:', error);
            });
        }
        // html5QrCodeRef.current.clear(); // Uncomment if needed for older versions
      }
    };
  }, []);

  const startScanner = async () => {
    if (!scannerContainerRef.current) return;
    
    // Generate a unique ID for the scanner to avoid conflicts
    const scannerId = `qr-reader-${Date.now()}`;
    scannerContainerRef.current.id = scannerId;
    
    setIsScanning(true);
    
    try {
      const html5QrCode = new Html5Qrcode(scannerId);
      html5QrCodeRef.current = html5QrCode;
      
      // Use facingMode constraint instead of trying to enumerate cameras
      // This is more reliable across different browsers and devices
      await html5QrCode.start(
        { facingMode: "environment" }, // Use environment camera (rear camera on mobile)
        {
          fps: 10,
          qrbox: { width: qrBoxSize, height: qrBoxSize }
        },
        (decodedText) => {
          handleQrCodeDetection(decodedText);
        },
        (errorMessage) => {
          // Ignore errors during scanning
          console.log("QR scanning in progress:", errorMessage);
        }
      );
    } catch (error) {
      console.error('Error starting QR scanner:', error);
      setIsScanning(false);
      onError?.('Failed to access camera. Please check camera permissions or try uploading a QR code image instead.');
      toast({
        variant: "destructive",
        description: "Failed to access camera. Please check camera permissions or try uploading an image instead.",
      });
    }
  };

  const stopScanner = async () => {
    if (html5QrCodeRef.current && html5QrCodeRef.current.isScanning) {
      try {
        await html5QrCodeRef.current.stop();
        setIsScanning(false);
      } catch (error) {
        console.error('Error stopping QR scanner:', error);
      }
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target?.result as string;
      setUploadedImage(imageDataUrl);
    };
    reader.readAsDataURL(file);
  };

  const scanUploadedImage = async () => {
    if (!uploadedImage) return;
    
    setIsAnalyzing(true);
    
    try {
      // Make sure we have an HTML5QrCode instance
      if (!html5QrCodeRef.current && scannerContainerRef.current) {
        const scannerId = `qr-reader-img-${Date.now()}`;
        scannerContainerRef.current.id = scannerId;
        html5QrCodeRef.current = new Html5Qrcode(scannerId);
      }
      
      if (!html5QrCodeRef.current) {
        throw new Error("QR code scanner not initialized");
      }
      
      // Convert data URL to File object
      const file = await fetch(uploadedImage)
        .then(r => r.blob())
        .then(blobFile => new File([blobFile], "qrcode.png", { type: "image/png" }));
      
      // Use scanFileV2 for better compatibility
      const result = await html5QrCodeRef.current.scanFileV2(file, true);
      handleQrCodeDetection(result.decodedText);
    } catch (error) {
      console.error('Error scanning uploaded QR code:', error);
      onError?.('Could not detect a valid QR code in the uploaded image.');
      toast({
        variant: "destructive",
        description: "Could not detect a valid QR code in the uploaded image.",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleQrCodeDetection = (decodedText: string) => {
    let url = decodedText;
    
    // If not a URL, just pass it through
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      if (!url.match(/^[a-zA-Z]+:\/\//)) {
        // Try to detect if it's a URL without protocol
        if (url.includes('.') && !url.includes(' ')) {
          url = 'https://' + url;
        }
      }
    }
    
    onDetected(url, decodedText);
    
    // Stop the scanner after detection
    if (isScanning) {
      stopScanner();
    }
  };

  return (
    <div className={cn("space-y-4", modernThemeStyles.text)}>
      <div className="max-w-md mx-auto">
        {!isScanning && !uploadedImage && (
          <div className={cn("rounded-lg p-6 text-center mb-4", modernThemeStyles.card)}>
            <div className="mb-4 flex justify-center">
              <div className={cn("w-16 h-16 rounded-full flex items-center justify-center", modernThemeStyles.iconBackground)}>
                <Camera className={cn("w-8 h-8", modernThemeStyles.accent)} />
              </div>
            </div>
            <h3 className={cn("text-lg mb-2", modernThemeStyles.heading)}>Scan a QR Code</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
              Use your device camera to scan a QR code or upload an image containing a QR code
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                type="button"
                className={cn(modernThemeStyles.button)}
                onClick={startScanner}
              >
                <Camera className="mr-2 h-4 w-4" />
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
                  className={cn("border", modernThemeStyles.outlineButton)}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>
              </div>
            </div>
          </div>
        )}

        {isScanning && (
          <div className={cn("rounded-lg p-4 text-center mb-4", modernThemeStyles.card)}>
            <div className="aspect-square relative max-w-xs mx-auto overflow-hidden rounded-md bg-black">
              {/* Create a dedicated container for the scanner */}
              <div 
                ref={scannerContainerRef} 
                className="w-full h-full"
                style={{ position: 'relative' }}
              ></div>
              
              {/* Overlay for QR code targeting */}
              <div className="absolute inset-0 border-2 border-dashed border-blue-500 animate-pulse opacity-70 pointer-events-none" />
            </div>
            <div className="mt-4">
              <Button 
                type="button"
                variant="outline"
                className={cn("border mt-2", modernThemeStyles.outlineButton)}
                onClick={stopScanner}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Cancel Scanning
              </Button>
            </div>
          </div>
        )}

        {uploadedImage && (
          <div className={cn("rounded-lg p-4 text-center mb-4", formalThemeStyles.card)}>
            <div className="space-y-4">
              <div className="relative mx-auto w-full max-w-xs aspect-square overflow-hidden rounded-md border bg-black">
                <img 
                  src={uploadedImage} 
                  alt="Uploaded QR Code" 
                  className="h-full w-full object-contain"
                />
              </div>
              
              <div className="flex justify-center space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  className={cn("border", formalThemeStyles.outlineButton)}
                  onClick={() => {
                    setUploadedImage(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Try Another
                </Button>
                
                <Button
                  type="button"
                  className={cn(formalThemeStyles.button)}
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
                      <Camera className="mr-2 h-4 w-4" />
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