import { useState, useCallback } from 'react';
import { storageProvider } from './storageProvider';
import type { UploadResponse, UploadProgressPayload } from '../types/UploaderType';

export function useUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState<UploadProgressPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  const upload = useCallback(async (file: File, folder?: string): Promise<UploadResponse | null> => {
    setIsUploading(true);
    setError(null);
    setProgress({ loaded: 0, total: 0, percentage: 0 });

    try {
      const result = await storageProvider.uploadImage(file, {
        folder,
        onProgress: (p) => setProgress(p),
      });
      return result;
    } catch (err: any) {
      const message = err?.message || 'An error occurred during file transmission.';
      setError(message);
      return null;
    } {
      setIsUploading(false);
    }
  }, []);

  const remove = useCallback(async (publicId: string): Promise<boolean> => {
    return await storageProvider.deleteImage(publicId);
  }, []);

  return { upload, remove, isUploading, progress, error };
}