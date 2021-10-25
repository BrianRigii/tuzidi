import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UserType } from './user-type-entity';

@Injectable()
export class UserTypeService {
    constructor(private userTypeRepository : Repository<UserType>){}

    create(createUserTypeDto : CreateUserTypeDto){

       return this.userTypeRepository.save(createUserTypeDto);

    }
}
