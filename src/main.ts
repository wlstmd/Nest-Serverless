import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 80;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`port: ${port}`);
}
bootstrap();
