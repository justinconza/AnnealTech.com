import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Button } from '@/components/ui/button';
import { QrCode, Camera, Loader2, X, AlertTriangle } from 'lucide-react';

interface QRCodeScannerProps {
  onDetected: (url: string, decodedText: string) => void;
  onError?: (error: string) => void;
}

const QR_CONFIG = {
  fps: 10,
  qrbox: { width: 250, height: 250 },
  aspectRatio: 1.0,
};

export default function QRCodeScanner({ onDetected, onError }: QRCodeScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [scannerMessage, setScannerMessage] = useState<string>('');
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [html5QrCode, setHtml5QrCode] = useState<Html5Qrcode | null>(null);
  const scannerRef = useRef<HTMLDivElement>(null);
  const scannerContainerId = 'qr-reader';

  const startScanner = async () => {
    if (!scannerRef.current) return;
    
    try {
      setScannerMessage('Starting camera...');
      
      const html5QrCodeInstance = new Html5Qrcode(scannerContainerId);
      setHtml5QrCode(html5QrCodeInstance);
      
      const cameras = await Html5Qrcode.getCameras();
      if (cameras && cameras.length > 0) {
        const cameraId = cameras[0].id;
        
        html5QrCodeInstance.start(
          cameraId,
          QR_CONFIG,
          (decodedText, decodedResult) => {
            // Successfully scanned QR Code
            console.log(`QR Code detected: ${decodedText}`, decodedResult);
            
            let url = decodedText;
            // Ensure URL has protocol prefix
            if (!/^https?:\/\//i.test(url)) {
              url = 'https://' + url;
            }
            
            html5QrCodeInstance.stop().then(() => {
              setIsScanning(false);
              onDetected(url, decodedText);
            });
          },
          (errorMessage) => {
            // Error or no QR found in current frame
            console.log(errorMessage);
          }
        )
        .then(() => {
          console.log("QR Code scanning started");
          setIsScanning(true);
          setHasPermission(true);
          setScannerMessage('Scanning QR code...');
        })
        .catch((err) => {
          console.error(`Unable to start scanning: ${err}`);
          setHasPermission(false);
          setScannerMessage('Camera access denied. Please grant camera permissions.');
          if (onError) onError('Camera access denied. Please grant camera permissions.');
        });
      } else {
        setScannerMessage('No cameras found on this device.');
        if (onError) onError('No cameras found on this device.');
      }
    } catch (err) {
      console.error('Error starting scanner:', err);
      setScannerMessage('Error accessing camera.');
      if (onError) onError('Error accessing camera.');
    }
  };

  const stopScanner = () => {
    if (html5QrCode && html5QrCode.isScanning) {
      html5QrCode.stop().then(() => {
        console.log('QR Code scanning stopped.');
        setIsScanning(false);
        setScannerMessage('');
      }).catch((err) => {
        console.log('Error stopping scanner:', err);
      });
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup on component unmount
      stopScanner();
    };
  }, []);

  const renderScannerControls = () => {
    if (isScanning) {
      return (
        <Button 
          variant="destructive" 
          size="sm"
          onClick={stopScanner}
          className="mt-2"
        >
          <X className="h-4 w-4 mr-2" />
          Stop Scanning
        </Button>
      );
    }
    
    return (
      <Button 
        variant="accent" 
        className="bg-accent hover:bg-accent/90 text-white"
        onClick={startScanner}
      >
        <Camera className="h-4 w-4 mr-2" />
        Start Camera
      </Button>
    );
  };

  return (
    <div className="w-full space-y-4">
      <div 
        id={scannerContainerId} 
        ref={scannerRef}
        className="relative overflow-hidden rounded-lg bg-slate border border-accent/10 w-full"
        style={{ minHeight: '300px' }}
      >
        {!isScanning && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <QrCode className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-heading">QR Code Scanner</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Position a QR code in view of your camera to scan and analyze for security threats.
            </p>
            {hasPermission === false && (
              <div className="flex items-center space-x-2 text-amber-500 text-sm">
                <AlertTriangle className="h-4 w-4" />
                <span>Camera access denied. Please grant camera permissions.</span>
              </div>
            )}
          </div>
        )}
        
        {scannerMessage && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-background/80 backdrop-blur-sm text-center text-sm">
            {isScanning && <Loader2 className="h-4 w-4 animate-spin inline-block mr-2" />}
            {scannerMessage}
          </div>
        )}
      </div>
      
      <div className="flex justify-center">
        {renderScannerControls()}
      </div>
      
      <div className="text-center text-xs text-muted-foreground">
        <p>You can also enter a URL manually below if you already have a QR code URL.</p>
      </div>
    </div>
  );
}