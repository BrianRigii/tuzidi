import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UserType } from './user-type-entity';

@Injectable()
export class UserTypeService {
    constructor(@InjectRepository(UserType) private userTypeRepository: Repository<UserType>){}

    create(createUserTypeDto : CreateUserTypeDto){

       return this.userTypeRepository.save(createUserTypeDto);

    }
}
