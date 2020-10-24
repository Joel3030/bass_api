import { IsDate, IsInt, IsNumber, IsOptional } from 'class-validator';

export class UpdateInventoryDto {
  @IsOptional()
  @IsNumber()
  existence: number;

  @IsOptional()
  @IsInt()
  price: number;

  @IsOptional()
  @IsDate()
  expiration: Date;

  @IsOptional()
  @IsDate()
  update_at: Date;
}
