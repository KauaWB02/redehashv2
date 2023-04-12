import { Controller, Get } from '@nestjs/common';
import { AppDataSource } from '../../Database/DbConections/dbConnection';

@Controller('users')
export class UsersController {
  @Get()
  async teste() {
    const conn = AppDataSource.migrations;

    console.log(conn);

    return ``;
  }
}
