/* eslint-disable prettier/prettier */
import { config } from 'dotenv';
config();

export const database = {
  connection: process.env.DB_CONNECTION || 'postgres',
  dataBase: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
}

export const server = {
  port: process.env.SERVER_PORT,
};
