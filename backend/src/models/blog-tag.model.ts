import {Entity, model, property} from '@loopback/repository';

@model()
export class BlogTag extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;


  constructor(data?: Partial<BlogTag>) {
    super(data);
  }
}

export interface BlogTagRelations {
  // describe navigational properties here
}

export type BlogTagWithRelations = BlogTag & BlogTagRelations;
