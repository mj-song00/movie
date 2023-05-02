import { IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
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
}
