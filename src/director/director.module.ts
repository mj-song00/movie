import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';

@Module({
  controllers: [DirectorController],
  providers: [DirectorService, PrismaService],
})
export class DirectorModule {}
