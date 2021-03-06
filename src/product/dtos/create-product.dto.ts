import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Seller } from '../../supplier/schemas';
import { Inventory } from '../../inventory/schemas/inventory.schema';

export class CreateProductDto {
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
}
