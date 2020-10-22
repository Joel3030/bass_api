import { Type } from 'class-transformer';
import { ReadCompanyDto } from './';
import { Company } from '../schemas';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class UpdateSellerDto {
  @ValidateNested()
  @Type(() => Fullname)
  fullname: Fullname[];

  @ValidateNested()
  @Type(() => Contacts)
  contacts: Contacts[];

  @ValidateNested()
  @Type(() => Location)
  location: Location[];

  @IsNotEmpty()
  company: Company;

  @IsOptional()
  @IsBoolean()
  status: boolean;

  @IsDate()
  update_at: Date;
}

class Fullname {
  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'name of the seller is too short' })
  @MaxLength(25, { message: 'name of the seller is too long' })
  name: string;

  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'lastname of the seller is too short' })
  @MaxLength(25, { message: 'lastname of the seller is too long' })
  lastname: string;
}

class Contacts {
  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsEmail()
  email: string;
}

class Location {
  @IsOptional()
  @IsString()
  @MaxLength(50, { message: 'Adrress is too long' })
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
