import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCat } from './dto/create-cat.dto';

@Controller('cats')
@ApiTags('Cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() dto: CreateCat) {
    return this.catsService.create(dto);
  }
}
