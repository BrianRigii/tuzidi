import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicle.entity';
import { User } from 'src/user/user';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle , ])],
  providers: [VehicleService],
  controllers: [VehicleController]
})
export class VehicleModule {}
