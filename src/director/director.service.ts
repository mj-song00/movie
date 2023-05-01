import { PrismaService } from './../prisma/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';

@Injectable()
export class DirectorService {
  constructor(private prismaService: PrismaService) {}

  async create(createDirectorDto: CreateDirectorDto) {
    const { directorName } = createDirectorDto;
    if (directorName === null || directorName === undefined)
      throw new BadRequestException();

    const director = await this.prismaService.director.create({
      data: { directorName },
    });
    return { result: director, status: 200 };
  }

  async findAll() {
    const directors = await this.prismaService.director.findMany();
    return { result: directors, status: 200 };
  }

  async findOne(id: string) {
    const directorId = Number(id);
    const detail = await this.prismaService.director.findUnique({
      where: { id: directorId },
    });
    return { result: detail, status: 200 };
  }

  async update(id: string, updateDirectorDto: UpdateDirectorDto) {
    const directorId = Number(id);
    const detail = await this.prismaService.director.update({
      where: { id: directorId },
      data: {
        directorName: updateDirectorDto.directorName,
      },
    });
    return { result: detail, status: 200 };
  }

  async remove(id: string) {
    const directorId = Number(id);
    const detail = await this.prismaService.director.delete({
      where: { id: directorId },
    });
    return { result: detail, status: 200 };
  }
}
