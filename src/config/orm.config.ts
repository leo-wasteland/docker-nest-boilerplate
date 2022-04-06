import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CatsModule } from 'src/apps/cats/cats.module';
import * as Models from '../models';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 3500,
  username: 'user',
  password: 'root',
  database: 'db',
  entities: [...Object.keys(Models).map((key) => Models[key]), CatsModule],
  synchronize: true,
};
