import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';
import { updateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async getUser(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException('User does not exist');
    return user;
  }

  async createUser(req: CreateUserDto): Promise<any> {
    const userExist = await this.userModel.findOne({ username: req.userName });
    if (userExist) throw new BadRequestException('User already registered');

    const newUser = new this.userModel(req);
    const user = await newUser.save();
    console.log(user);

    delete user.password;    
    return user;
  }

  async updateUser(id: string, req: updateUserDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, req, {
      new: true,
    });
    if (!updatedUser) throw new NotFoundException('User does not exist');
    return updatedUser;
  }

  async deleteUser(id: string): Promise<User> {
    const deletedUSer = await this.userModel.findByIdAndDelete(id);
    if (!deletedUSer) throw new NotFoundException('User does not exist');
    return deletedUSer;
  }
}
