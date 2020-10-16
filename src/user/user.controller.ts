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
import { CreateUserDto, UpdateUserDto } from './dtos';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(@Res() res: Response): Promise<Response> {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  @Get('prueba')
  async findone(@Res() res: Response): Promise<Response> {
    const users = await this.userService.findOne('joel303266330322');
    return res.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  async getUser(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const user = await this.userService.getUser(id);
    return res.status(HttpStatus.OK).json(user);
  }

  @Post('create')
  async createUser(
    @Res() res: Response,
    @Body() req: CreateUserDto,
  ): Promise<Response> {
    const newUser = await this.userService.createUser(req);
    return res.status(HttpStatus.OK).json({
      messege: 'User Successfylly Created',
      newUser,
    });
  }

  @Put('update/:id')
  async updateUSer(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() req: UpdateUserDto,
  ) {
    const updatedUSer = await this.userService.updateUser(id, req);
    return res.status(HttpStatus.OK).json({
      message: 'User Successfully Updated',
      updatedUSer,
    });
  }

  @Delete('delete/:id')
  async deleteUser(@Res() res: Response, @Param('id') id: string) {
    const deletedUser = await this.userService.deleteUser(id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'User Successfully Deleted', deletedUser });
  }


}
