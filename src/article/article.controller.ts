import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put, UploadedFile, UseInterceptors
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { ObjectId } from 'mongoose';
import { UpdateArticleDto } from './dto/update-article.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/articles')
export class ArticleController {
  constructor(private ArticleService: ArticleService) {
  }
  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  create(
    @UploadedFile() picture: Express.Multer.File,
    @Body() dto: CreateArticleDto,
  ) {
    return this.ArticleService.create(dto, picture);
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
