import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 3500,
  username: 'user',
  password: 'root',
  database: 'db',
  entities: [],
  synchronize: true,
};
