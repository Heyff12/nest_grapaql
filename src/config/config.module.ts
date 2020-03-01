// import { DynamicModule, Module } from '@nestjs/common';
// // import { ConfigService } from './config.service';

// @Module({})
// export class ConfigModule {
//   static register(): DynamicModule {
//     return {
//       module: ConfigModule,
//       // providers: [ConfigService],
//       // exports: [ConfigService],
//     };
//   }
// }


import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`${process.env.NODE_ENV || 'development'}.env`),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}