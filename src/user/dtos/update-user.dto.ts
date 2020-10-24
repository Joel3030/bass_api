import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Employee } from 'src/employee/schemas/employee.schema';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
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
  create_at: Date;

  @IsOptional()
  @IsDate()
  update_at: Date;
}
