import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.ALLOWED_ORIGIN);
  app.enableCors({
    origin: ['http://localhost:3000', process.env.ALLOWED_ORIGIN],
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
