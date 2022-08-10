import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class TaskDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly description: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}
