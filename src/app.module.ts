import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorModule } from './actor/actor.module';

@Module({
  imports: [ActorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
