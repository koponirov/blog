import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private ArticleModel: Model<ArticleDocument>,
  ) {}

  async create(dto: CreateArticleDto): Promise<Article> {
    const article = await this.ArticleModel.create({ ...dto, likes: 0 });
    return article;
  }

  getAll() {}

  getOne() {}

  delete() {}
}
