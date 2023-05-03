import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  // gnere 생성
  @Post('/')
  @UsePipes(ValidationPipe)
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }

  // 모든 genre 불러오기
  @Get('/')
  findAll() {
    return this.genreService.findAll();
  }

  // genre 검색
  @Get('/detail')
  findOne(@Query('id') id: string) {
    return this.genreService.findOne(+id);
  }

  // genre 수정
  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genreService.update(+id, updateGenreDto);
  }

  // genre 삭제
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.genreService.remove(+id);
  }
}
