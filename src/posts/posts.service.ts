import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreatePostDto } from './CreatePostDto';
import { Post as PostSchema } from './post.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostSchema) private readonly postModel: ModelType<PostSchema>
    ) {}

  async getAllPost() {
    return await this.postModel.find();
  }

  async createPost( createPostDto: CreatePostDto) {
    return await this.postModel.create(createPostDto);
  }

  async getSinglePost(id: string) {
    return await this.postModel.findById(id);
  }

  async updatePost(id: string, updatePostDto: CreatePostDto) {
    return await this.postModel.findByIdAndUpdate(id, updatePostDto);
  }

  async deletePost(id: string) {
    return await this.postModel.findByIdAndDelete(id);
  }


}
