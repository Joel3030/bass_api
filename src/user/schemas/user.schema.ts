import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userName: string;

  @Prop({
    select: false,
  })
  password: string;

  @Prop() //type employee
  employee: any;

  @Prop({
    default: true,
  })
  status: boolean;

  @Prop( {name: 'create_at' })
  createAt: Date;

  @Prop({ default: Date.now, name: 'update_at' })
  updateAt: Date;
}
