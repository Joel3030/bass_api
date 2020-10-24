import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InventoryDocument = Inventory & Document;

@Schema()
export class Inventory {
  @Prop()
  existence: number;

  @Prop()
  price: number;

  @Prop()
  expiration: Date;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
