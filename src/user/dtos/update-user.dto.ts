import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(25, { message: 'username is too long' })
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  employee: any;

  @IsNotEmpty()
  @IsArray()
  roles: string[];

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  @IsNotEmpty()
  @IsDate()
  create_at: Date;

  @IsNotEmpty()
  @IsDate()
  update_at: Date;
}
