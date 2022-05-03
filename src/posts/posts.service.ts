import { FilesService } from './../files/files.service';
import { Post } from './posts.model';
import { CreatePostDto } from './dto/create-post.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PostsService {

  constructor(@InjectModel(Post) private postRepository: typeof Post,
                private fileService: FilesService) {}

  async create(dto: CreatePostDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const post = await this.postRepository.create({...dto, image: fileName})
    return post;
  }
}
