import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class CreateClientDto {
  @ValidateNested({ each: true })
  @Type(() => Fullname)
  fullname: Fullname[];

  @IsOptional()
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

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
}

class Fullname {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'Name is too short' })
  @MaxLength(25, { message: 'Name is too long' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'lastname is too short' })
  @MaxLength(25, { message: 'lastame is too long' })
  lastname: string;
}

class Contacts {
  @IsOptional()
  @IsString()
  @Length(14, 14, {
    message: 'must be equal to 14 characters',
  })
  telephone: string;

  @IsOptional()
  @IsString()
  @Length(17, 17, {
    message: 'must be equal to 17 characters',
  })
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
