import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentType } from '@typegoose/typegoose';
import { CreatePostDto } from './CreatePostDto';
import { Post as PostSchema } from './post.model';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {

  constructor(private readonly postService: PostsService) {}

  @Get()
  @ApiOperation({ summary: 'Show All Blog Post' })
  async index() {
    return await this.postService.getAllPost();
  }

  @Post()
  @ApiOperation({ summary: 'Create Post' })
  async create(@Body() createPostDto: CreatePostDto) {
    const blog = await this.postService.createPost(createPostDto);
    return {
      success: true, 
      data: {
        blog
      }
    };
  }

  @ApiOperation({ summary: 'Post Detail' })
  @Get(':id')
  async detail(@Param('id') id: string) {
    const blog = this.postService.getSinglePost(id);
    return {
     success: true,
     data: {
       blog,
     }
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Edit Post' })
  async update(@Param('id') id: string, @Body() updatePostDto: CreatePostDto) {
    const blog = await this.postService.updatePost(id, updatePostDto);
    return {
      success: true,
      data: {
        blog,
      }
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Post' })
  async remove(@Param('id') id: string) {
    const blog = this.postService.deletePost(id);
    return {
      success: true,
      data: {
        blog,
      }
    }
  }
}
