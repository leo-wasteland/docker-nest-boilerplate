import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/models';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catsRepository: Repository<Cat>,
  ) {}

  create(createCatDto: CreateCatDto) {
    return this.catsRepository.create(createCatDto);
  }

  findAll() {
    return this.catsRepository.find();
  }

  findOne(id: number) {
    return this.catsRepository.findOneBy({ id: id });
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.catsRepository.update(id, updateCatDto);
  }

  remove(id: number) {
    return this.catsRepository.delete(id);
  }
}
