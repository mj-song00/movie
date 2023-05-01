import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorModule } from './actor/actor.module';
import { DirectorModule } from './director/director.module';

@Module({
  imports: [ActorModule, ActorModule, DirectorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
