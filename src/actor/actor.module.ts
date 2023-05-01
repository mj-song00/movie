import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';

@Module({
  controllers: [ActorController],
  providers: [ActorService, PrismaService],
})
export class ActorModule {}
