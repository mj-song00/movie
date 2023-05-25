import { IsNotEmpty } from 'class-validator';

export class CreateCharacterDto {
  @IsNotEmpty()
  characterName: string;

  actorId: number;
}
