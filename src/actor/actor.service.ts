import { PrismaService } from './../prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';

@Injectable()
export class ActorService {
  constructor(private prismaService: PrismaService) {}

  async create(createActorDto: CreateActorDto) {
    const { actorName } = createActorDto;
    if (actorName === null || actorName === undefined)
      throw new BadRequestException();

    const actor = await this.prismaService.actor.create({
      data: { actorName },
    });
    return { result: actor, status: 200 };
  }

  async findAll() {
    const actors = await this.prismaService.actor.findMany();

    return { result: actors, status: 200 };
  }

  async findOne(id: string) {
    const actorId = Number(id);

    const detail = await this.prismaService.actor.findUnique({
      where: { id: actorId },
    });

    return { result: detail, status: 200 };
  }

  async update(id: string, updateActorDto: UpdateActorDto) {
    const actorId = Number(id);
    const actor = await this.prismaService.actor.update({
      where: {
        id: actorId,
      },
      data: {
        actorName: updateActorDto.actorName,
      },
    });

    return { result: actor, status: 200 };
  }

  async remove(id: string) {
    const actorId = Number(id);
    const detail = await this.prismaService.actor.delete({
      where: { id: actorId },
    });

    return { result: detail, status: 200 };
  }
}
