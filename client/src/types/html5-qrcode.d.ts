// Type definitions for html5-qrcode
interface Html5QrcodeResult {
  decodedText: string;
  result: {
    text: string;
  };
}

interface Html5QrcodeOptions {
  fps?: number;
  qrbox?: number | { width: number; height: number };
  aspectRatio?: number;
  disableFlip?: boolean;
  formatsToSupport?: Array<number>;
}

interface Html5QrcodeScannerState {
  currentScanType: string;
  paused: boolean;
}

declare class Html5Qrcode {
  constructor(elementId: string);
  
  start(
    cameraId: string,
    configuration: Html5QrcodeOptions,
    qrCodeSuccessCallback: (decodedText: string, result: Html5QrcodeResult) => void,
    qrCodeErrorCallback?: (error: string, error2: any) => void
  ): Promise<null>;
  
  stop(): Promise<void>;
  clear(): void;
  
  scanFileV2(
    file: File | Blob,
    showImage?: boolean
  ): Promise<Html5QrcodeResult>;

  getRunningTrackCapabilities(): MediaTrackCapabilities;
  getRunningTrackSettings(): MediaTrackSettings;
  getState(): Html5QrcodeScannerState;
  applyVideoConstraints(constraints: MediaTrackConstraints): Promise<null>;
  isScanning(): boolean;
  getSupportedFormats(): string[];
}

interface Window {
  Html5Qrcode: typeof Html5Qrcode;
}