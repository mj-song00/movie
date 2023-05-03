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
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  // character 생성
  @Post('/')
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.characterService.create(createCharacterDto);
  }

  // 모든 character 검색
  @Get('/')
  findAll() {
    return this.characterService.findAll();
  }

  //하나의 character 검색
  @Get('/detail')
  findOne(@Query('id') id: string) {
    return this.characterService.findOne(+id);
  }

  // character 정보 수정
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ) {
    return this.characterService.update(+id, updateCharacterDto);
  }

  // character 삭제
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.characterService.remove(+id);
  }

  // character와 actor 연결
  @Patch('/play/:characterId/:actorId')
  createPlay(
    @Param('characterId') characterId: string,
    @Param('actorId') actorId: string,
  ) {
    return this.characterService.createPlay(characterId, actorId);
  }
}
