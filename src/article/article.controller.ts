import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { ObjectId } from 'mongoose';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('/articles')
export class ArticleController {
  constructor(private ArticleService: ArticleService) {
  }
  @Post()
  async create(@Body() dto: CreateArticleDto) {
    return this.ArticleService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: ObjectId, @Body() dto: UpdateArticleDto) {
    return this.ArticleService.update(id, dto);
  }

  @Get()
  async getAll() {
    return this.ArticleService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: ObjectId) {
    return this.ArticleService.getOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: ObjectId) {
    return this.ArticleService.delete(id);
  }
}
