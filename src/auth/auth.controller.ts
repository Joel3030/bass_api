import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserDecorator } from 'src/common/decorators';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards';
import { Response } from 'express';
import { ReadAuthDto } from './dtos/read-auth.dto';

import { Auth } from '../common/decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Res() res: Response,
    @UserDecorator() user: ReadAuthDto,
  ): Promise<Response> {
    const data = await this.authService.login(user);
    return res.status(HttpStatus.OK).json({
      message: 'Successful login',
      data,
    });
  }

  @Auth()
  @Get('profile')
  getProfile(
    @UserDecorator() user: ReadAuthDto,
    @Res() res: Response,
  ): Response {
    return res.status(HttpStatus.OK).json(user);
  }
}
