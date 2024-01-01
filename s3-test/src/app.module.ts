import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { S3UploadModule } from './s3-upload/s3-upload.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [S3UploadModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
