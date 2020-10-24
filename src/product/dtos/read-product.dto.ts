import { Type } from 'class-transformer';
import { Seller } from '../../supplier/schemas';
import { Inventory } from '../../inventory/schemas/inventory.schema';

export class ReadProductDto {
  description: string;

  category: string[];

  @Type(() => Inventory)
  inventory: Inventory[];

  @Type(() => Seller)
  supplier: Seller[];

  imaga_path: String;

  status: boolean;

  service: boolean;

  create_at: Date;

  update_at: Date;
}
