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
import { query } from 'express';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';

@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  // actor 생성
  @Post('/')
  @UsePipes(ValidationPipe)
  create(@Body() createActorDto: CreateActorDto) {
    return this.actorService.create(createActorDto);
  }

  // 모든 actor 검색
  @Get('/')
  findAll() {
    return this.actorService.findAll();
  }

  // 한명의 actor검색
  @Get('/detail')
  findOne(@Query('id') id: string) {
    return this.actorService.findOne(id);
  }

  // actor 정보 수정
  @Patch('/detail/:id')
  update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
    return this.actorService.update(id, updateActorDto);
  }

  //actor 삭제
  @Delete('/detail/:id')
  remove(@Param('id') id: string) {
    return this.actorService.remove(id);
  }
}
