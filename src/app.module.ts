import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://superuser1:superuser1@cluster0.soxoc.mongodb.net/blog?retryWrites=true&w=majority',
    ),
    ArticleModule,
  ],
})
export class AppModule {

}
