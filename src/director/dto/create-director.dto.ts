import { IsNotEmpty } from 'class-validator';

export class CreateDirectorDto {
  @IsNotEmpty()
  directorName: string;
}
