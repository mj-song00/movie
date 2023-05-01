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

  @Post('/')
  @UsePipes(ValidationPipe)
  create(@Body() createActorDto: CreateActorDto) {
    return this.actorService.create(createActorDto);
  }

  @Get('/')
  findAll() {
    return this.actorService.findAll();
  }

  @Get('/detail')
  findOne(@Query('id') id: string) {
    return this.actorService.findOne(id);
  }

  @Patch('/detail/:id')
  update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
    return this.actorService.update(id, updateActorDto);
  }

  @Delete('/detail/:id')
  remove(@Param('id') id: string) {
    return this.actorService.remove(id);
  }
}
