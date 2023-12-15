import { IsString, IsEnum, IsArray, IsOptional, IsNumber } from 'class-validator';

export class CreateMonsterDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  title: string;

  @IsEnum(['female', 'male', 'other'])
  gender: string;

  @IsString()
  description: string;

  @IsArray()
  nationality: string[];

  @IsOptional()
  @IsString()
  image?: string;

  @IsNumber()
  @IsOptional()
  goldBalance?: number;

  @IsNumber()
  @IsOptional()
  speed?: number;

  @IsNumber()
  @IsOptional()
  health?: number;

  @IsOptional()
  @IsString()
  secretNotes?: string;

  @IsString()
  monsterPassword: string;
}
