import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}
    
  async  create(createUserDto : CreateUserDto){

       let user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }
}
