import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, DefaultUserDocument } from './schemas';
import { ConfigService } from '@nestjs/config';
import { keys } from '../config/constants';


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
        role: ['ADMIN'],
        status: true,
        create_at: null,
        update_at: null

      };

      console.log(req.password);
      const newDefaultUser = new this.defaultUserModel(req);
      return await newDefaultUser.save();
    }
  }
}
