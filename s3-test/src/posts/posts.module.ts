import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { S3UploadModule } from 'src/s3-upload/s3-upload.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { S3Client } from '@aws-sdk/client-s3';
import * as mime from 'mime-types';
import s3Storage from 'multer-s3';
import * as multerS3 from 'multer-s3';
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
  controllers: [PostsController],
})
export class PostsModule {}

// 이미지가 들어가야할 곳
// store
// menu
