import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from './post/post.model';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'kashin.db.elephantsql.com',
      port: 5432,
      username: 'sfucsigz',
      password: '2EhU3yscewMagTqU_AA0IT5n24t6W_WE',
      database: 'sfucsigz',
      entities: [Post],
      synchronize: true,
    }),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
