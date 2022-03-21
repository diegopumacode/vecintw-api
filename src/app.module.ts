import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'kashin.db.elephantsql.com',
      port: 5432,
      username: 'ipmihznv',
      password: 'XLp3jF32y7exfM-iTfQESrU6TzmNRdV4',
      database: 'ipmihznv',
      entities: [],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
