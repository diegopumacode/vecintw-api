import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import internal from 'stream';

export class CreatePostDto {

  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  public content: string;

  @IsEmail()
  public email: string;

}