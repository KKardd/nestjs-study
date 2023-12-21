// src/s3-upload/s3-upload.controller.ts

import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3UploadService } from './s3-upload.service';

@Controller('s3-upload')
export class S3UploadController {
  constructor(private readonly s3UploadService: S3UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.MulterS3.File) {
    // const fileUrl = await this.s3UploadService.uploadFile(file);
    // return { url: fileUrl };
    console.log(file);
  }
}
