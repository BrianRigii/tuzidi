import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LocalAuthGaurd } from './local-auth.gaurd';

@Controller('auth')
export class AuthController {
    constructor(private userService : UserService, private authService : AuthService){}

    @Post('signup')
    signUp(@Body() createUserDto : CreateUserDto){ 
        return this.userService.create(createUserDto)  
    }

    @Post('login')
    @UseGuards(LocalAuthGaurd)
    login(@Req()req){
        return this.authService.login(req.user)  
    }
}
