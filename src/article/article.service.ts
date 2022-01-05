import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private ArticleModel: Model<ArticleDocument>,
  ) {}

  async create(dto: CreateArticleDto): Promise<Article> {
    const article = await this.ArticleModel.create({ ...dto, likes: 0 });
    return article;
  }

  async update(id: ObjectId, dto: UpdateArticleDto): Promise<ObjectId> {
    const article = await this.ArticleModel.findByIdAndUpdate(id, dto);
    return article._id;
  }

  async getAll(): Promise<Article[]> {
    const articles = await this.ArticleModel.find();
    return articles;
  }

  async getOne(id: ObjectId): Promise<Article> {
    const article = await this.ArticleModel.findById(id);
    return article;
  }

  async delete(id: ObjectId): Promise<Article> {
    console.log(id);
    const article = await this.ArticleModel.findByIdAndDelete(id);
    return article._id;
  }
}
