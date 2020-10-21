import { Schema, Prop, raw, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop(
    raw({
      name: String,
      lastname: String,
    }),
  )
  fullname: Record<string, any>;

  @Prop()
  idcard: string;

  @Prop(
    raw({
      telephone: String,
      phone: String,
      email: String,
    }),
  )
  contacts: Record<string, any>;

  @Prop(
    raw({
      address: String,
      sector: String,
      municipio: String,
      zipcode: Number,
    }),
  )
  location: Record<string, any>;

  @Prop({ default: true })
  status: boolean;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
