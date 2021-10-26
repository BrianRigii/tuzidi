import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserTypeDto } from 'src/user-type/dto/create-user-type.dto';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './create-vehicle.dto';
import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle) private vehicleRepostiory: Repository<Vehicle>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.vehicleRepostiory.save(createVehicleDto);
  }

  find(){
      return this.vehicleRepostiory.find()
  }
}
