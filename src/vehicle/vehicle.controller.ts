import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateVehicleDto } from './create-vehicle.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
    constructor(private vehicleService : VehicleService){}

    @Post()
    create(@Body() createVehicleDto : CreateVehicleDto){
        return this.vehicleService.create(createVehicleDto)
    }

    @Get()
    find(){
        return this.vehicleService.find()
    }
}
