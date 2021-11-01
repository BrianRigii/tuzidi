import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
    constructor(private userService : UserService){}

    @Post('signup')
    signUp(@Body() createUserDto : CreateUserDto){ 
        return this.userService.create(createUserDto)  
    }
}
