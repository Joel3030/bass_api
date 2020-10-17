import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DefaultUserDocument = User & Document;

@Schema()
export class User {
  @Prop({})
  username: string;

  @Prop()
  password: string;

  @Prop() //type employee
  employee: any;

  @Prop([String]) 
  role: string[];

  @Prop({
    default: true,
  })
  status: boolean;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;
}

export const DefaultUserSchema = SchemaFactory.createForClass(User);
