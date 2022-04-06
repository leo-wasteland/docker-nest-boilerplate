import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { CatColor } from 'src/enums/cat-color.enum';

export class CreateCat {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(CatColor)
  color: CatColor;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  birthday?: Date;
}
