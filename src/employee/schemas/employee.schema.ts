import { Schema, Prop, raw, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop(
    raw({
      name: { type: String, required: true },
      lastname: { type: String, required: true },
    }),
  )
  fullname: Record<string, any>;

  @Prop()
  idcard: string;

  @Prop(
    raw({
      telephone: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
    }),
  )
  contacts: Record<string, any>;

  @Prop(
    raw({
      address: { type: String, required: true },
      sector: { type: String, required: true },
      municipio: { type: String, required: true },
      zipcode: { type: Number, required: true },
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
