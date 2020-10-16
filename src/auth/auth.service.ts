import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from '../user/user.service';
import { plainToClass } from 'class-transformer';
import { ReadAuthDto } from './dtos';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService,
    private jwtService: JwtService) {}

  async validateUser(username: string, pass: string):Promise<ReadAuthDto | undefined> {
    const user = await this.userService.findOne(username);

    if (user && (await compare(pass, user.password))) {
     return plainToClass(ReadAuthDto, user);     
    }
    return null;
  }

  login(user: ReadAuthDto) {    
    const payload = { username: user.username, sub: user._id };   
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
