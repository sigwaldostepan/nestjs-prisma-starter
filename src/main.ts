import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.ALLOWED_ORIGIN);
  app.enableCors();
  await app.listen(process.env.PORT ?? 4000, '0.0.0.0');
}
bootstrap();
