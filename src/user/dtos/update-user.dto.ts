import {
  IsArray,
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Employee } from '../../employee/schemas/employee.schema';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'the username is too short' })
  @MaxLength(25, { message: 'username is too long' })
  username: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  employee: Employee;

  @IsOptional()
  @IsArray()
  roles: string[];

  @IsOptional()
  @IsBoolean()
  status: boolean;

  @IsOptional()
  @IsDate()
  update_at: Date;
}
