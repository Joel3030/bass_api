import { IsDate, IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateInventoryDto {
  @IsOptional()
  @IsNumber()
  existence: number;

  @IsOptional()
  @IsInt()
  price: number;

  @IsOptional()
  @IsDate()
  expiration: Date;
}
