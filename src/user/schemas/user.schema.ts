import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';
import { Employee } from '../../employee/schemas/employee.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({
    type: schema.Types.ObjectId,
    ref: Employee.name,
  })
  employee: Employee;

  @Prop([String])
  roles: string[];

  @Prop()
  status: boolean;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
