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

  @Post('/api/v1/movies')
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get('/api/v1/movies')
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') movieId: string) {
    return this.movieService.findOne(+movieId);
  }

  @Patch('/api/v1/movies/:movieId/:playId')
  update(
    @Param('movieId') movieId: string,
    @Param('playId') playId: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return this.movieService.update(+movieId, playId, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieService.remove(+id);
  }
}
