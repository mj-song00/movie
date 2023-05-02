import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  point: number;

  @IsNotEmpty()
  playTime: string;

  poster: string;

  @IsNotEmpty()
  description: string;

  play?: string[];
  gnere?: string[];
  director: string[];
}
