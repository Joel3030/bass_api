import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsNotEmpty()
  @IsString()
  type: String[];

  @IsOptional()
  @IsDate()
  update_at: Date;
}
