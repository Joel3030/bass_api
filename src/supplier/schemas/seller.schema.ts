import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as s } from 'mongoose';
import { Company } from './company.schema';

export type SellerDocument = Seller & Document;

@Schema()
export class Seller {
  @Prop(
    raw({
      name: String,
      lastname: String,
    }),
  )
  fullname: Record<string, any>;

  @Prop(
    raw({
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

  @Prop({
    type: s.Types.ObjectId,
    ref: Company.name,
  })
  company: Company;

  @Prop({ default: true })
  status: boolean;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date })
  update_at: Date;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
