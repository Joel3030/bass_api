import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Inventory } from '../../inventory/schemas/inventory.schema';
import { Seller } from '../../supplier/schemas';

export class UpdateProductDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  category: string[];

  @IsNotEmpty()
  @IsString()
  inventory: Inventory;

  @IsNotEmpty()
  @IsString()
  supplier: Seller;

  @IsOptional()
  @IsString()
  imaga_path: String;

  @IsOptional()
  @IsBoolean()
  status: boolean;

  @IsOptional()
  @IsBoolean()
  service: boolean;

  @IsOptional()
  @IsDate()
  update_at: Date;
}
