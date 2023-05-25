import { PrismaService } from './../prisma/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(private prismaService: PrismaService) {}

  async create(createMovieDto: CreateMovieDto) {
    const { title, point, playTime, description, director, gnere, play } =
      createMovieDto;

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
      include: {
        director: true,
        play: true,
        genre: true,
      },
    });

    return { result: movie, status: 200 };
  }

  async findMovie(title: string) {
    const movie = await this.prismaService.movie.findMany({
      where: {
        OR: [
          {
            title: {
              contains: title,
            },
          },
        ],
      },
      include: {
        director: true,
        play: true,
        genre: true,
      },
    });

    if (movie === null) throw new BadRequestException(`검색결과가 없습니다`);

    return { result: movie, status: 200 };
  }

  async findOne(id: number) {
    const movie = await this.prismaService.movie.findUnique({
      where: { id: id },
      include: {
        director: true,
        play: true,
        genre: true,
      },
    });

    return { result: movie, status: 200 };
  }

  async update(moiveId: number, updateMovieDto: UpdateMovieDto) {
    const moive = Number(moiveId);
    const update = await this.prismaService.movie.update({
      where: { id: moive },
      data: {
        title: updateMovieDto.title,
        point: updateMovieDto.point,
        playTime: updateMovieDto.playTime,
        description: updateMovieDto.poster,
      },
    });
    return { result: update, status: 200 };
  }

  // async updatePlayAndGenre(moiveId: number, playId: string, genreId: string) {
  //   const moive = Number(moiveId);
  //   const play = Number(playId);
  //   const genre = Number(genreId);

  //   const update = await this.prismaService.movie.update({
  //     where: { id: moive },
  //     data: {
  //       play: {
  //         connect: {
  //           id: play,
  //         },
  //       },
  //       genre: {
  //         connect: {
  //           id: genre,
  //         },
  //       },
  //     },
  //     include: {
  //       play: true,
  //       genre: true,
  //     },
  //   });
  //   return { result: update, status: 200 };
  // }

  async remove(id: number) {
    const movie = await this.prismaService.movie.delete({
      where: { id: id },
    });
    return { result: movie, status: 200 };
  }
}
