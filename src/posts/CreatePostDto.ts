import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator'

export class CreatePostDto {
  @ApiProperty({ description: 'Post Title', example: 'My First Blog' })
  @IsNotEmpty({ message: 'Please insert title'})
  title: string;

  @ApiProperty({ description: 'Post Content', example: 'My First Blog Content ... ' })
  content: string;
}