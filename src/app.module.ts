import { Module , NestModule, MiddlewareConsumer,RequestMethod} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'


import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
// import { TypeOrmModule } from '@nestjs/typeorm';  //数据库 sql
import { MongooseModule } from '@nestjs/mongoose';
import { GraphqlOptions } from './graphql.options'

@Module({
  // imports: [CatsModule,ConfigModule.register({ folder: './config' })],
  imports: [
    CatsModule,
    AuthModule,
    UsersModule,
    ConfigModule,
    // TypeOrmModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    // GraphQLModule.forRoot({
    //   debug: true,
    //   playground: true,
    //   typePaths: ['./**/*.graphql'],
    //   definitions: {
    //     path: join(process.cwd(), 'src/graphql.ts'),
    //   },
    // }),
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
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
