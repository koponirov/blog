import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://superuser1:superuser1@cluster0.soxoc.mongodb.net/blog?retryWrites=true&w=majority',
    ),
    ArticleModule,
    FileModule
  ],
})
export class AppModule {

}
