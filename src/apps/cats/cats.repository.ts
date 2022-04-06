import { Cat } from 'src/models';
import { Repository } from 'typeorm';

export class CatsRepository extends Repository<Cat> {}
