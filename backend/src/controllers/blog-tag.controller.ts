import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {BlogTag} from '../models';
import {BlogTagRepository} from '../repositories';

@authenticate('jwt')
export class BlogTagController {
  constructor(
    @repository(BlogTagRepository)
    public blogTagRepository: BlogTagRepository,
  ) {}

  @post('/blog-tags', {
    responses: {
      '200': {
        description: 'BlogTag model instance',
        content: {'application/json': {schema: getModelSchemaRef(BlogTag)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogTag, {
            title: 'NewBlogTag',
            exclude: ['id'],
          }),
        },
      },
    })
    blogTag: Omit<BlogTag, 'id'>,
  ): Promise<BlogTag> {
    return this.blogTagRepository.create(blogTag);
  }

  @get('/blog-tags/count', {
    responses: {
      '200': {
        description: 'BlogTag model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(BlogTag) where?: Where<BlogTag>,
  ): Promise<Count> {
    return this.blogTagRepository.count(where);
  }

  @get('/blog-tags', {
    responses: {
      '200': {
        description: 'Array of BlogTag model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(BlogTag, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(BlogTag) filter?: Filter<BlogTag>,
  ): Promise<BlogTag[]> {
    return this.blogTagRepository.find(filter);
  }

  @patch('/blog-tags', {
    responses: {
      '200': {
        description: 'BlogTag PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogTag, {partial: true}),
        },
      },
    })
    blogTag: BlogTag,
    @param.where(BlogTag) where?: Where<BlogTag>,
  ): Promise<Count> {
    return this.blogTagRepository.updateAll(blogTag, where);
  }

  @get('/blog-tags/{id}', {
    responses: {
      '200': {
        description: 'BlogTag model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(BlogTag, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(BlogTag, {exclude: 'where'}) filter?: FilterExcludingWhere<BlogTag>
  ): Promise<BlogTag> {
    return this.blogTagRepository.findById(id, filter);
  }

  @patch('/blog-tags/{id}', {
    responses: {
      '204': {
        description: 'BlogTag PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogTag, {partial: true}),
        },
      },
    })
    blogTag: BlogTag,
  ): Promise<void> {
    await this.blogTagRepository.updateById(id, blogTag);
  }

  @put('/blog-tags/{id}', {
    responses: {
      '204': {
        description: 'BlogTag PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() blogTag: BlogTag,
  ): Promise<void> {
    await this.blogTagRepository.replaceById(id, blogTag);
  }

  @del('/blog-tags/{id}', {
    responses: {
      '204': {
        description: 'BlogTag DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.blogTagRepository.deleteById(id);
  }
}
