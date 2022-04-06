import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/models';
import { CatsRepository } from './cats.repository';
import { CreateCat } from './dto/create-cat.dto';

export class CatsService {
  constructor(
    @InjectRepository(CatsRepository)
    private readonly catsRepository: CatsRepository,
  ) {}

  async create(dto: CreateCat): Promise<Cat> {
    return await this.catsRepository.save(
      new Cat({
        name: dto.name,
        color: dto.color,
        birthday: dto.birthday,
      }),
    );
  }
}
