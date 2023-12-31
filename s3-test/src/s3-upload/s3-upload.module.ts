import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { S3Client } from '@aws-sdk/client-s3';
import * as mime from 'mime-types';
import s3Storage from 'multer-s3';
import * as multerS3 from 'multer-s3';
import { S3UploadController } from './s3-upload.controller';
import { multerS3Config } from 'src/s3-config';

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        multerS3Config(configService),
    }),
  ],
  controllers: [S3UploadController],
  providers: [],
})
export class S3UploadModule {}
