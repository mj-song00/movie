import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorModule } from './actor/actor.module';
import { DirectorModule } from './director/director.module';
import { GenreModule } from './genre/genre.module';
import { CharacterModule } from './character/character.module';

import { MovieModule } from './movie/movie.module';

@Module({
  imports: [ActorModule, ActorModule, DirectorModule, GenreModule, CharacterModule, MovieModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
