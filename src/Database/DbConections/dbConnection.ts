/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { database } from '../../Config/app';
import { User } from '../models/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: database.host,
  port: database.port,
  username: database.username,
  password: database.password,
  database: database.dataBase,
  synchronize: false,
  logging: false,
  entities: ['build/Database/models/*.{ts,js}'],
  migrations: ['build/Database/migrations/*.{ts,js}'],
  migrationsRun: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Conexão com banco de dados foi um sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao tentar iniciar conexão ao banco ', err);
  });
