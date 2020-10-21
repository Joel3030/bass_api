import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as s } from 'mongoose';
import { Employee } from 'src/employee/schemas/employee.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({})
  username: string;

  @Prop()
  password: string;

  @Prop({
    type: s.Types.ObjectId,
    ref: Employee.name,
    required: true,
  })
  employee: Employee;

  @Prop([String])
  roles: string[];

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
