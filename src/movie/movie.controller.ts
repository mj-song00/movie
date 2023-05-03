import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  //movie 생성
  @Post('/api/v1/movies')
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  // 쿼리스트링으로 title 검색
  @Get('/api/v1/movies')
  findMovie(@Query('title') title: string) {
    return this.movieService.findMovie(title);
  }

  // 하나의 movie 검색
  @Get('/api/v1/movies/:id')
  findOne(@Param('id') movieId: string) {
    return this.movieService.findOne(+movieId);
  }

  // movie  업데이트
  @Patch('/api/v1/movies/:movieId')
  update(
    @Param('movieId') movieId: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return this.movieService.update(+movieId, updateMovieDto);
  }

  // movie, play, genre 연결
  @Patch('/:movieId/:playId/:genreId')
  updatePlayAndGenre(
    @Param('movieId') movieId: string,
    @Param('playId') playId: string,
    @Param('genreId') genreId: string,
  ) {
    return this.movieService.updatePlayAndGenre(+movieId, playId, genreId);
  }

  // movie 정보 삭제
  @Delete('/api/v1/movies/:id')
  remove(@Param('id') id: string) {
    return this.movieService.remove(+id);
  }
}
