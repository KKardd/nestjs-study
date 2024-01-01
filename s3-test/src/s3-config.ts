import { ConfigService } from '@nestjs/config';
import { S3Client } from '@aws-sdk/client-s3';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
// import s3Storage from 'multer-s3';
import * as multerS3 from 'multer-s3';
import * as mime from 'mime-types';
import { Request } from 'express';

export const multerS3Config = (configService: ConfigService): MulterOptions => {
  const s3 = new S3Client({
    region: 'region',
    credentials: {
      accessKeyId: 'access',
      secretAccessKey: 'secret',
    },
  });

  return {
    storage: multerS3({
      s3,
      bucket: 'bucket-test-nog1',
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: function (req: Request, file, cb) {
        const path = req.path.split('/');
        path.shift();
        let dir: string = '';
        switch (path[0]) {
          case 'posts':
            dir += path[0];
            break;
          case 'menu':
            dir += 'posts/' + path[0];
            break;
        }
        console.log(dir);
        cb(
          null,
          `${dir}/${new Date().getTime()}.${mime.extension(file.mimetype)}`,
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
};

// 가게수정, 메뉴추가, 메뉴수정

// 가게수정 - /stores/:id (PUT)
// 메뉴추가 - /menus (POST)
// 메뉴수정 - /menus/:id (PUT)

// 가게수정에서 이미지 보낼시
// /stores/upload/:storeId

// 메뉴추가에서 이미지 보낼시
// /menus/upload/:storeId

// 메뉴수정에서 이미지 보낼시
// /menus/upload/:storeId
