import { Prop, Schema } from '@nestjs/mongoose';
import { Document, Schema as s } from 'mongoose';
import { Inventory } from '../../inventory/schemas/inventory.schema';
import { Seller } from '../../supplier/schemas/seller.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  description: string;

  @Prop([String])
  category: string[];

  @Prop({
    type: s.Types.ObjectId,
    ref: Inventory.name,
  })
  inventory: Inventory;

  @Prop({ type: s.Types.ObjectId, ref: Seller.name })
  seller: Seller;

  @Prop()
  image_path: string;

  @Prop({ default: true })
  status: Boolean;

  @Prop({ default: true })
  services: boolean;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;
}
