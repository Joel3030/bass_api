import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

@Exclude()
export class updateEmployeeDto {
  @ValidateNested({ each: true })
  @Type(() => FullName)
  fullname: FullName[];

  @IsOptional()
  @Length(13, 13, {
    message: 'Id card must be equal to 13 characters',
  })
  idcard: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Contacts)
  contacts: Contacts[];

  @IsOptional()
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

class FullName {
  @IsString()
  @MinLength(3, { message: 'lastname is too short' })
  @MaxLength(25, { message: 'Name is too long' })
  name: string;

  @IsString()
  @MinLength(3, { message: 'lastname is too short' })
  @MaxLength(25, { message: 'lastname is too long' })
  lastname: string;
}

class Contacts {
  @IsString()
  @Length(14, 14, {
    message: 'must be equal to 14 characters',
  })
  telephone: string;

  @IsString()
  @Length(17, 17, {
    message: 'must be equal to 17 characters',
  })
  phone: string;

  @IsEmail()
  email: string;
}

class Location {
  @IsString()
  @MaxLength(50, { message: 'Adrress is too long' })
  address: string;

  @IsString()
  sector: string;

  @IsString()
  municipio: string;

  @IsNumber()
  zipcode: number;
}
