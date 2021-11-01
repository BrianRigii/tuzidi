import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule} from '@nestjs/jwt';
import { Keys } from 'src/keys';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: Keys.jwtKey,
    signOptions: {expiresIn : '365d'}
  }),],
  controllers: [AuthController],
  providers:[AuthService, LocalStrategy, ]
})
export class AuthModule {}
