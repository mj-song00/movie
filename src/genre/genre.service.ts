import { PrismaService } from './../prisma/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private prismaService: PrismaService) {}

  async create(createGenreDto: CreateGenreDto) {
    const { type } = createGenreDto;
    if (type === null || type === undefined) throw new BadRequestException();

    const typeInfo = await this.prismaService.genre.create({
      data: { type },
    });
    return { result: typeInfo, status: 200 };
  }

  async findAll() {
    const types = await this.prismaService.genre.findMany();
    return { result: types, status: 200 };
  }

  async findOne(id: number) {
    const detail = await this.prismaService.genre.findUnique({
      where: { id: id },
    });
    return { result: detail, status: 200 };
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    const detail = await this.prismaService.genre.update({
      where: { id: id },
      data: {
        type: updateGenreDto.type,
      },
    });
    return { result: detail, status: 200 };
  }

  async remove(id: number) {
    const detail = await this.prismaService.genre.delete({
      where: { id: id },
    });

    return { result: detail, status: 200 };
  }
}
