import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, isNotEmpty } from 'class-validator';
import { Category, Inventory } from '../schemas';
import { ReadCategoryDto } from './read-category.dto';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  @Type(() => Category)
  category: Category[];
}
