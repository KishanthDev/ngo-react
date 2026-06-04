export interface UploadResponse {
  url: string;       // The public URL of the uploaded asset
  publicId: string;  // The unique identifier/key used by the provider
  bytes?: number;
  format?: string;
}

export interface UploadProgressPayload {
  loaded: number;
  total: number;
  percentage: number;
}

export interface IUploadService {
  uploadImage(
    file: File, 
    options?: { 
      folder?: string; 
      onProgress?: (progress: UploadProgressPayload) => void; 
    }
  ): Promise<UploadResponse>;
  
  deleteImage(publicId: string): Promise<boolean>;
}