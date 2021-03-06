// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { UsersModule } from '../users/users.module';

// @Module({
//   imports: [UsersModule],
//   providers: [AuthService],
// })
// export class AuthModule {}

// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { UsersModule } from '../users/users.module';
// import { PassportModule } from '@nestjs/passport';
// import { LocalStrategy } from './local.strategy';

// @Module({
//   imports: [UsersModule, PassportModule],
//   providers: [AuthService, LocalStrategy],
// })
// export class AuthModule {}


import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UsersModule,
    // PassportModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy,JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}