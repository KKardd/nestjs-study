import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { S3UploadService } from './s3-upload/s3-upload.service';
import { S3UploadController } from './s3-upload/s3-upload.controller';

@Module({
  imports: [],
  controllers: [AppController, S3UploadController],
  providers: [AppService, S3UploadService],
})
export class AppModule {}
