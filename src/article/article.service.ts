import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { FileService, FileType } from '../file/file.service';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private ArticleModel: Model<ArticleDocument>,
    private FileService: FileService
  ) {}

  async create(dto: CreateArticleDto, picture): Promise<Article> {
    const picturePath = this.FileService.createFile(FileType.IMAGE, picture)
    const article = await this.ArticleModel.create({
      ...dto,
      picture: picturePath,
      likes: 0,
    });
    return article;
  }

  async update(id: ObjectId, dto: UpdateArticleDto): Promise<ObjectId> {
    const article = await this.ArticleModel.findByIdAndUpdate(id, dto);
    return article._id;
  }

  async getAll(count = 10, offset = 0): Promise<Article[]> {
    const articles = await this.ArticleModel.find()
      .skip(Number(offset))
      .limit(Number(count));
    return articles;
  }

  async getOne(id: ObjectId): Promise<Article> {
    const article = await this.ArticleModel.findById(id);
    return article;
  }

  async delete(id: ObjectId): Promise<Article> {
    const article = await this.ArticleModel.findByIdAndDelete(id);
    return article._id;
  }

  async search(query: string): Promise<Article[]>{
    const articles = await this.ArticleModel.find({
      title: { $regex: new RegExp(query,'i') },
    })
    return articles
  }
}
