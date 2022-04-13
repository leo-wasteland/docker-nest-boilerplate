import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Example } from 'src/models';
import { Repository } from 'typeorm';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(Example)
    private readonly exampleRepository: Repository<Example>,
  ) {}

  create(createExampleDto: CreateExampleDto) {
    return this.exampleRepository.save(createExampleDto);
  }

  findAll() {
    return this.exampleRepository.find();
  }

  findOne(id: number) {
    return this.exampleRepository.findOneBy({ id: id });
  }

  update(id: number, updateExampleDto: UpdateExampleDto) {
    return this.exampleRepository.update(id, updateExampleDto);
  }

  remove(id: number) {
    return this.exampleRepository.delete(id);
  }
}
