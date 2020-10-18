import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, DefaultUserDocument } from './schemas';
import { ConfigService } from '@nestjs/config';
import { keys } from '../config/constants';
import { hash } from 'bcrypt';

@Injectable()
export class SetDefaultService {
  constructor(
    @InjectModel(User.name)
    private defaultUserModel: Model<DefaultUserDocument>,
    private configService: ConfigService,
  ) {
    this.setDefaultUser();
  }

  async setDefaultUser() {
    const defaultUser = await this.defaultUserModel.findOne({
      username: this.configService.get<string>(keys.DEFAULT_USERNAME),
    });

    if (!defaultUser) {
      const req: User = {
        username: this.configService.get<string>(keys.DEFAULT_USERNAME),
        password: this.configService.get<string>(keys.DEFAULT_PASSWORD),
        employee: null,
        roles: ['ADMIN'],
        status: true,
        create_at: null,
        update_at: null,
      };

      req.password = await hash(req.password, 10);
      
      const newDefaultUser = new this.defaultUserModel(req);
      return await newDefaultUser.save();
    }
  }
}
