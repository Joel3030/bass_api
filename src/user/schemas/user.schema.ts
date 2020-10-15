import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    name: 'username'
  })
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

  @Prop( {default: Date.now, rename: 'create_at' })
  createAt: Date;

  @Prop({ default: Date.now, rename: 'update_at' })
  updateAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
