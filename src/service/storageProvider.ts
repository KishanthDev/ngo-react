import { CloudinaryService } from './cloudinaryService';
import type { IUploadService } from '../types/UploaderType';
// import { AwsS3Service } from './awsS3Service'; // Future import

// Instantiate and export the current active provider
export const storageProvider: IUploadService = new CloudinaryService();