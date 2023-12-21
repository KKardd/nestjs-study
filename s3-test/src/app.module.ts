import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { S3UploadModule } from './s3-upload/s3-upload.module';

@Module({
  imports: [S3UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
