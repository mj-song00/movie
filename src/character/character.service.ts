import { PrismaService } from './../prisma/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class CharacterService {
  constructor(private prisamService: PrismaService) {}

  async create(createCharacterDto: CreateCharacterDto, id: string) {
    const { characterName } = createCharacterDto;
    if (characterName === null || characterName === undefined)
      throw new BadRequestException();
    const actorId = Number(id);
    const actor = await this.prisamService.actor.findUnique({
      where: { id: actorId },
    });

    console.log(actor);

    //const character = this.prisamService.character.create({
    // data: {
    //   characterName: createCharacterDto.characterName,
    //   actor: {
    //     create: [
    //       {
    //         actorName: actor.actorName,
    //       },
    //     ],
    //   },
    // },
    // include: {
    //   actor: true,
    // },
    // });

    // return { result: character, status: 200 };
  }

  async findAll() {
    return `This action returns all character`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} character`;
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  async remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
