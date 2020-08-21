import {Entity, model, property} from '@loopback/repository';

@model()
export class Blog extends Entity {
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
  smallDescription: string;

  @property({
    type: 'string',
    required: true,
  })
  body: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  blogTags: object[];


  constructor(data?: Partial<Blog>) {
    super(data);
  }
}

export interface BlogRelations {
  // describe navigational properties here
}

export type BlogWithRelations = Blog & BlogRelations;
