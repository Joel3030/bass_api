import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { updateUserDto } from './dtos/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(@Res() res: Response) {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  async getUser(@Res() res: Response, @Param('id') id: string) {
    const user = await this.userService.getUser(id);
    return res.status(HttpStatus.OK).json(user);
  }

  @Post('create')
  async createUser(@Res() res: Response, @Body() req: CreateUserDto) {
    const newUser = await this.userService.createUser(req);
    return res.status(HttpStatus.OK).json(newUser);
  }

  @Put('update/:id')
  async updateUSer(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() req: updateUserDto,
  ) {
    const updatedUSer = await this.userService.updateUser(id, req);
    return res.status(HttpStatus.OK).json(updatedUSer);
  }

  @Delete('delete/:id')
  async deleteUser(@Res() res: Response, @Param('id') id: string) {
    const deletedUser = await this.userService.deleteUser(id);
    return res.status(HttpStatus.OK).json(deletedUser);
  }
}
