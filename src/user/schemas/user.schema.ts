import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({})
  username: string;

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

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
