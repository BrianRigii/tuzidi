import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from 'src/vehicle/vehicle.entity';

@Module({
    imports : [TypeOrmModule.forFeature([Vehicle])]
})
export class UserModule {}
