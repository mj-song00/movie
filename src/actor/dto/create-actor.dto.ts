import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateActorDto {
  @IsOptional()
  @IsNotEmpty()
  actorName: string;
}
