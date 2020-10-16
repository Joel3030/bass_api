import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto, UpdateUserDto, ReadUserDto } from './dtos';
import { hash } from 'bcrypt';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(): Promise<ReadUserDto[]> {
    const users = await this.userModel.find();
    return plainToClass(ReadUserDto, users);
  }

  async getUser(id: string): Promise<ReadUserDto> {
    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException('User does not exist');
    return plainToClass(ReadUserDto, user);
  }

  async createUser(req: Partial<CreateUserDto>): Promise<ReadUserDto> {
    const userExist = await this.userModel.findOne({ username: req.username });
    if (userExist) throw new BadRequestException('User already registered');

    req.password = await hash(req.password, 10);

    const newUser = new this.userModel(req);
    const user: User = await newUser.save();

    return plainToClass(ReadUserDto, user);
  }

  async updateUser(id: string, req: UpdateUserDto): Promise<ReadUserDto> {
    if (req.password) req.password = await hash(req.password, 10);

    const updatedUser = await this.userModel.findByIdAndUpdate(id, req, {
      new: true,
    });
    if (!updatedUser) throw new NotFoundException('User does not exist');
    return plainToClass(ReadUserDto, updatedUser);
  }

  async deleteUser(id: string): Promise<ReadUserDto> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) throw new NotFoundException('User does not exist');
    return plainToClass(ReadUserDto, deletedUser);
  }
}
