import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);

    if (user && (await compare(pass, user.password))) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

}
