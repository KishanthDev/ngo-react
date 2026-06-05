// import type { IUploadService, UploadResponse } from '../types/UploaderType';

// export class AwsS3Service implements IUploadService {
//   async uploadImage(file: File, options?: { folder?: string }): Promise<UploadResponse> {
//     // Your S3 upload implementation (using @aws-sdk/client-s3 or presigned URLs)
//     return { url: 'https://bucket.s3.amazonaws.com/...', publicId: 's3-key' };
//   }
//   async deleteImage(publicId: string): Promise<boolean> {
//     // S3 delete implementation
//     return true;
//   }
// }