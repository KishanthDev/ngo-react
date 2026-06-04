import type { IUploadService, UploadResponse, UploadProgressPayload } from '../types/UploaderType';

export class CloudinaryService implements IUploadService {
    private cloudName: string;
    private uploadPreset: string;

    constructor() {
        this.cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '';
        this.uploadPreset ='ngo_upload_preset';
    }

    async uploadImage(
        file: File,
        options?: { folder?: string; onProgress?: (p: UploadProgressPayload) => void }
    ): Promise<UploadResponse> {
        const url = `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);

            // Handle progress monitoring
            if (options?.onProgress && xhr.upload) {
                xhr.upload.onprogress = (e) => {
                    if (e.lengthComputable) {
                        const percentage = Math.round((e.loaded / e.total) * 100);
                        // Fix: Add optional chaining to both the object and the function call
                        options?.onProgress?.({ loaded: e.loaded, total: e.total, percentage });
                    }
                };
            }

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const response = JSON.parse(xhr.responseText);
                    resolve({
                        url: response.secure_url,
                        publicId: response.public_id,
                        bytes: response.bytes,
                        format: response.format,
                    });
                } else {
                    reject(new Error(`Cloudinary upload failed with status ${xhr.status}`));
                }
            };

            xhr.onerror = () => reject(new Error('Network error during Cloudinary upload.'));

            // Construct payload
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', this.uploadPreset);
            if (options?.folder) {
                formData.append('folder', options.folder);
            }

            xhr.send(formData);
        });
    }

    async deleteImage(publicId: string): Promise<boolean> {
        // Note: Secure deletions typically require a backend endpoint to sign the request.
        // Replace this with a call to your internal backend API if required.
        try {
            const response = await fetch('/api/media/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ publicId, provider: 'cloudinary' }),
            });
            return response.ok;
        } catch (error) {
            console.error('Failed to delete asset:', error);
            return false;
        }
    }
}