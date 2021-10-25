import { Body, Controller, Get } from '@nestjs/common';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UserTypeService } from './user-type.service';

@Controller('user-type')
export class UserTypeController {
    constructor(private userTypeService : UserTypeService){}
    @Get()
    create(@Body() createUserTypeDto: CreateUserTypeDto){
        return this.userTypeService.create(createUserTypeDto)
    }
}
