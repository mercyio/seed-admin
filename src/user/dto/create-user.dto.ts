/* eslint-disable prettier/prettier */
import {
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;
}
