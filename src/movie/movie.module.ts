import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  controllers: [MovieController],
  providers: [MovieService, PrismaService],
})
export class MovieModule {}
