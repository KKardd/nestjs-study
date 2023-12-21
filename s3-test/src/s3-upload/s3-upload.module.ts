import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { S3Client } from '@aws-sdk/client-s3';
import * as mime from 'mime-types';
import s3Storage from 'multer-s3';
import * as multerS3 from 'multer-s3';
import { S3UploadController } from './s3-upload.controller';

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        const s3 = new S3Client({
          region: 'region',
          credentials: {
            accessKeyId: 'accesskey',
            secretAccessKey: 'secretkey',
          },
        });

        return {
          storage: s3Storage({
            s3,
            bucket: 'bucket-test-nog1',
            acl: 'public-read',
            contentType: multerS3.AUTO_CONTENT_TYPE,
            key: function (req, file, cb) {
              cb(
                null,
                `${new Date().getTime()}.${mime.extension(file.mimetype)}`,
              );
            },
          }),
          limits: {
            fileSize: 1024 * 1024 * 5, // 5 MB
            files: 1,
          },
          fileFilter(req, file, callback) {
            callback(null, true);
          },
        };
      },
    }),
  ],
  controllers: [S3UploadController],
  providers: [],
})
export class S3UploadModule {}
