import {DefaultCrudRepository} from '@loopback/repository';
import {BlogTag, BlogTagRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BlogTagRepository extends DefaultCrudRepository<
  BlogTag,
  typeof BlogTag.prototype.id,
  BlogTagRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(BlogTag, dataSource);
  }
}
