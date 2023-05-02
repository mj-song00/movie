import { PrismaService } from './../prisma/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(private prismaService: PrismaService) {}

  async create(createMovieDto: CreateMovieDto) {
    const { title, point, playTime, description } = createMovieDto;

    const isExist = await this.prismaService.movie.findUnique({
      where: { title },
    });

    if (isExist) throw new BadRequestException(`It's existing title`);

    const movie = await this.prismaService.movie.create({
      data: {
        title,
        point,
        playTime,
        description,
      },
    });

    return { result: movie, status: 200 };
  }

  async findAll() {
    const movie = await this.prismaService.movie.findMany();

    return { result: movie, status: 200 };
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(moiveId: number, updateMovieDto: UpdateMovieDto) {
    console.log(moiveId, updateMovieDto);
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
