import { Type } from 'class-transformer';

import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class CreateEmployeeDto {
  @ValidateNested({ each: true })
  @Type(() => FullName)
  fullname: FullName[];

  @IsNotEmpty()
  @Length(13, 13, {
    message: 'Id card must be equal to 13 characters',
  })
  idcard: string;

  @ValidateNested({ each: true })
  @Type(() => Contacts)
  contacts: Contacts[];

  @ValidateNested({ each: true })
  @Type(() => Location)
  location: Location[];
}

class FullName {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'lastname is too short' })
  @MaxLength(25, { message: 'Name is too long' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'lastname is too short' })
  @MaxLength(25, { message: 'lastname is too long' })
  lastname: string;
}

class Contacts {
  @IsNotEmpty()
  @IsString()
  @Length(14, 14, {
    message: 'must be equal to 14 characters',
  })
  telephone: string;

  @IsNotEmpty()
  @IsString()
  @Length(17, 17, {
    message: 'must be equal to 17 characters',
  })
  phone: string;

  @IsNotEmpty()
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
