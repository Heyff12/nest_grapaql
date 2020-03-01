import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
    cors: true
  });
  app.use(compression());
  app.use(helmet());
  // app.use(csurf());
  // app.enableCors()  //等同于 cors:true
  await app.listen(7777);
}
bootstrap();
