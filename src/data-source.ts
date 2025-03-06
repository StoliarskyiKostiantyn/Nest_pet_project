import { DataSource } from 'typeorm';

import { User } from './user/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  entities: [User],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
