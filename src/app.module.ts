import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserTypeModule } from './user-type/user-type.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserType } from './user-type/user-type-entity';
import { UserTypeService } from './user-type/user-type.service';
import { UserModule } from './user/user.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { Vehicle } from './vehicle/vehicle.entity';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'brian',
      password: 'root',
      database: 'tuzidi',
      entities: [UserType, Vehicle, User],
      synchronize: true,
    }),
    UserTypeModule,
    UserModule,
    VehicleModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
