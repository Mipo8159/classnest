import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const configService = app.get(ConfigService);
  const PORT = configService.get('APP_PORT');

  await app.listen(PORT, () => console.log('server running on port:' + PORT));
}
bootstrap();
