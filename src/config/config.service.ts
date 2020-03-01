// import { Injectable } from '@nestjs/common';
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// import * as path from 'path';
// // import { EnvConfig } from '../interfaces';

// @Injectable()
// export class ConfigService {
//   // private readonly envConfig: EnvConfig;

//   // constructor() {
//   //   const options = { folder: './config' };

//   //   const filePath = `${process.env.NODE_ENV || 'development'}.env`;
//   //   const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
//   //   this.envConfig = dotenv.parse(fs.readFileSync(envFile));
//   // }

//   // get(key: string): string {
//   //   return this.envConfig[key];
//   // }
// }



import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync('./src/config/development.env'))
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}