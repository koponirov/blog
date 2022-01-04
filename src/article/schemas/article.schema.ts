import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop()
  picture: string;

  @Prop()
  likes: number;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
