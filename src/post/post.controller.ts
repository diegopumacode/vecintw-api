import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { get } from 'http';
import { CreatePostDto } from './post.dto';
import { Post as PostModel } from './post.model';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    @Inject(PostService)
    private readonly service: PostService;


    @Get()
    public getAll(@Query() query) {
        return this.service.getAll(query)
    }

    @Get(':id')
    public getId(@Param('id', ParseIntPipe) id: number) {
        return this.service.getById(id)
    }

    @Post()
    public createUser(@Body() body: CreatePostDto): Promise<PostModel> {
        return this.service.create(body);
    }

    @Get("/:id/comment")
    public getComments(@Param('id', ParseIntPipe) id: number){
        return this.service.getComments(id);
    }

    @Post("/:id/comment")
    public crcomment(@Body() body: CreatePostDto,@Param('id', ParseIntPipe) id: number){
        console.log(body)
        return this.service.createCommend(body,id);
    }


    @Put("/:id/like")
    public like(@Param('id', ParseIntPipe) id: number,@Body() body){
        return this.service.like(id,body);
    }

    @Put("/:id/dislike")
    public dislike(@Param('id', ParseIntPipe) id: number,@Body() body){
        return this.service.dislike(id,body);
    }

}
