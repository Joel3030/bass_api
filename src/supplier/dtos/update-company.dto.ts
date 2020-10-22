import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class UpdateCompanyDto {
  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'Name of the company is too short' })
  @MaxLength(25, { message: 'Name of the company is too long' })
  name: string;

  @ValidateNested({ each: true })
  @Type(() => Contacts)
  contacts: Contacts[];

  @ValidateNested({ each: true })
  @Type(() => Location)
  location: Location[];

  @IsOptional()
  @IsBoolean()
  status: boolean;

  @IsOptional()
  @IsDate()
  update_at: Date;
}

class Contacts {
  @IsOptional()
  @IsString()
  telephone: String;

  @IsOptional()
  @IsEmail()
  email: String;
}

class Location {
  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  sector: string;

  @IsOptional()
  @IsString()
  municipio: string;

  @IsOptional()
  @IsNumber()
  zipcode: number;
}
