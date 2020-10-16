import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/common/decorators/user.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard, JwtAuthGuard } from './guards';
import { ReadUserDto } from '../user/dtos/read-user.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Res() res: Response,
    @User() user: ReadUserDto,
  ): Promise<Response> {
    const data = await this.authService.login(user);
    return res.status(HttpStatus.OK).json({
      message: 'Successful login',
      data,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(
    @User() user: ReadUserDto,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(user);
  }
}
