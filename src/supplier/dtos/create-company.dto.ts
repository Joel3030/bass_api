import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
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
}

class Contacts {
  @IsNotEmpty()
  @IsString()
  telephone: String;

  @IsOptional()
  @IsEmail()
  email: String;
}

class Location {
  @IsNotEmpty()
  @IsString()
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
