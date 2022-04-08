import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CatsModule } from 'src/apps/cats/cats.module';
import * as Models from '../models';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: __dirname + '/./../../dev.env',
});

export const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [...Object.keys(Models).map((key) => Models[key]), CatsModule],
  synchronize: true,
};
