import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService : JwtService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByMail(email);

    if (user && user.comparePassword(password)) {
      const { password, ...result } = user;

      return result;
    } else return null;
  }

  async login(user: any){
      const payload = {username : user.email , sub : user.id}

      return {
          ...user,
          access_token : this.jwtService.sign(payload)
      }

  }
}
