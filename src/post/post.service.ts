import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './post.dto';
import { Post } from './post.model';

@Injectable()
export class PostService {

    @InjectRepository(Post)
    private readonly repository: Repository<Post>;


    async getAll(query) {
        const take = 10
        const skip = query.skip || 1
        console.log(skip)
        const skipuwu = (skip - 1) * take

        const [result, total] = await this.repository.findAndCount(
            {
                where: { type: 1 },
                take: take,
                skip: skipuwu,
                order: { created: 'DESC' }
            })

        return {
            items: result,
            page: +skip,
            total: total,
            size: take
        }
    }

    async getById(id) {
        return await this.repository.findOne({where: { id: id } })
    }

    async create(body: CreatePostDto) {
        const post: Post = new Post()

        post.title = body.title
        post.content = body.content
        post.email = body.email
        return await this.repository.save(post)
    }

    async getComments(id: number) {
        return await this.repository.find(
            {
                where: { post: { id: id }, type: 2 },
                order: { created: 'DESC' }
                
            })

    }
    
    async createCommend(body: CreatePostDto, id: number) {
        let post = await this.repository.findOne({ id: id })
        post.comments = post.comments + 1
        await this.repository.save(post)
        return await this.repository.save({ ...body, post: post, type: 2 })
    }

    async like(id: number) {
        let post = await this.repository.findOne({ id: id })
        post.likes = post.likes + 1
        return await this.repository.save(post)
    }
    async dislike(id: number) {
        console.log(id)
        let post = await this.repository.findOne({ id: id })
        post.dislikes = post.dislikes + 1
        return await this.repository.save(post)
    }
}
