import {
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Employee } from '../../employee/schemas/employee.schema';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(25, { message: 'the username is too long' })
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'the password is too short' })
  password: string;

  @IsNotEmpty()
  @IsString()
  employee: Employee;

  @IsNotEmpty()
  @IsArray()
  roles: string[];
}
