import { PrismaService } from './../prisma/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class CharacterService {
  constructor(private prisamService: PrismaService) {}

  async create(createCharacterDto: CreateCharacterDto) {
    const { characterName } = createCharacterDto;
    if (characterName === null || characterName === undefined)
      throw new BadRequestException();

    const character = await this.prisamService.character.create({
      data: { characterName },
    });

    return { result: character, status: 200 };
  }

  async createPlay(characterId: string, actorId: string) {
    const actor = Number(actorId);
    const actorDetail = await this.prisamService.actor.findUnique({
      where: { id: actor },
    });

    const id = Number(characterId);
    const detail = await this.prisamService.character.findUnique({
      where: { id: id },
    });

    const play = await this.prisamService.play.create({
      data: {
        characterId: detail.id,
        actorId: actorDetail.id,
      },
    });
    return { result: play, status: 200 };
  }

  async findAll() {
    const characters = await this.prisamService.character.findMany();
    return { result: characters, status: 200 };
  }

  async findOne(id: number) {
    const detail = await this.prisamService.character.findUnique({
      where: { id: id },
    });
    return { result: detail, status: 200 };
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto) {
    const detail = await this.prisamService.character.update({
      where: { id: id },
      data: {
        characterName: updateCharacterDto.characterName,
      },
    });
    return { result: detail, status: 200 };
  }

  async remove(id: number) {
    const detail = await this.prisamService.character.delete({
      where: { id: id },
    });
    return { result: detail, status: 200 };
  }
}
