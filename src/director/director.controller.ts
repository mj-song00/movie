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

  @Post('/')
  @UsePipes(ValidationPipe)
  create(@Body() createDirectorDto: CreateDirectorDto) {
    return this.directorService.create(createDirectorDto);
  }

  @Get('/')
  findAll() {
    return this.directorService.findAll();
  }

  @Get('/detail')
  findOne(@Query('id') id: string) {
    return this.directorService.findOne(id);
  }

  @Patch('/detail/:id')
  update(
    @Param('id') id: string,
    @Body() updateDirectorDto: UpdateDirectorDto,
  ) {
    return this.directorService.update(id, updateDirectorDto);
  }

  @Delete('/detail/:id')
  remove(@Param('id') id: string) {
    return this.directorService.remove(id);
  }
}
