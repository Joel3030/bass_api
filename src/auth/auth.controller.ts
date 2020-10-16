import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators/user.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() req: any, @User() user: any) {
      const data = await this.authService.login(user);
      return {
        message: 'Login exitoso',
        data,
      };
    }
}
