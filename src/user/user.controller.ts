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
import { Auth } from '../common/decorators';
import { AppResource } from '../app.roles';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Auth({
    resource: AppResource.USER,
    action: 'read',
    possession: 'any',
  })
  @Get()
  async getUsers(@Res() res: Response): Promise<Response> {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  @Auth({
    resource: AppResource.USER,
    action: 'read',
    possession: 'any',
  })
  @Get(':id')
  async getUser(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const user = await this.userService.getUser(id);
    return res.status(HttpStatus.OK).json(user);
  }

  @Auth({
    resource: AppResource.USER,
    action: 'create',
    possession: 'any',
  })
  @Auth()
  @Post('create')
  async createUser(
    @Res() res: Response,
    @Body() req: CreateUserDto,
  ): Promise<Response> {
    const newUser = await this.userService.createUser(req);
    return res.status(HttpStatus.OK).json({
      messege: 'User Created Successfylly',
      newUser,
    });
  }

  @Auth({
    resource: AppResource.USER,
    action: 'update',
    possession: 'any',
  })
  @Put('update/:id')
  async updateUSer(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() req: UpdateUserDto,
  ) {
    const updatedUSer = await this.userService.updateUser(id, req);
    return res.status(HttpStatus.OK).json({
      message: 'User Updated Successfully',
      updatedUSer,
    });
  }

  @Auth({
    resource: AppResource.USER,
    action: 'delete',
    possession: 'any',
  })
  @Delete('delete/:id')
  async deleteUser(@Res() res: Response, @Param('id') id: string) {
    const deletedUser = await this.userService.deleteUser(id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'User Deleted Successfully', deletedUser });
  }
}
