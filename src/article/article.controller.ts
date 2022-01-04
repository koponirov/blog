import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('/articles')
export class ArticleController {
  constructor(private ArticleService: ArticleService) {
  }
  @Post()
  async create(@Body() dto: CreateArticleDto) {
    return this.ArticleService.create(dto);
  }

  @Get()
  async getAll() {
    return 'getAll articles works';
  }

  async getOne() {}

  async delete() {}
}
