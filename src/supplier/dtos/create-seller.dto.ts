import { Type } from 'class-transformer';
import { ReadCompanyDto } from './';
import { Company } from '../schemas/company.schema';
import {
  IsEmail,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class CreateSellerDto {
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
}

class Fullname {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'name of the seller is too short' })
  @MaxLength(25, { message: 'name of the seller is too long' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'lastname of the seller is too short' })
  @MaxLength(25, { message: 'lastname of the seller is too long' })
  lastname: string;
}

class Contacts {
  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsOptional()
  @IsEmail()
  email: string;
}

class Location {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50, { message: 'Adrress is too long' })
  address: string;

  @IsNotEmpty()
  @IsString()
  sector: string;

  @IsNotEmpty()
  @IsString()
  municipio: string;

  @IsNotEmpty()
  @IsNumber()
  zipcode: number;
}
