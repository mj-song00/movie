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
import { DirectorService } from './director.service';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';

@Controller('director')
export class DirectorController {
  constructor(private readonly directorService: DirectorService) {}

  // director 생성
  @Post('/')
  @UsePipes(ValidationPipe)
  create(@Body() createDirectorDto: CreateDirectorDto) {
    return this.directorService.create(createDirectorDto);
  }

  // 모든 director 검색
  @Get('/')
  findAll() {
    return this.directorService.findAll();
  }

  // 한명의 director 검색
  @Get('/detail')
  findOne(@Query('id') id: string) {
    return this.directorService.findOne(id);
  }

  // movie와 director 관계 연결
  @Patch('/detail/:directorId/:movieId')
  update(
    @Param('directorId') directorId: string,
    @Param('movieId') movieId: string,
    @Body() updateDirectorDto: UpdateDirectorDto,
  ) {
    return this.directorService.update(directorId, movieId, updateDirectorDto);
  }

  // director 삭제
  @Delete('/detail/:id')
  remove(@Param('id') id: string) {
    return this.directorService.remove(id);
  }
}
