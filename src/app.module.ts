import { Module , NestModule, MiddlewareConsumer,RequestMethod} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';


import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
// import { ConfigModule } from './config/config.module';


@Module({
  // imports: [CatsModule,ConfigModule.register({ folder: './config' })],
  imports: [
    CatsModule,
    GraphQLModule.forRoot({}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes('cats')
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
