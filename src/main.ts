import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { server } from './Config/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(server.port, () => {
    console.log(server.port);
  });
}
bootstrap();
