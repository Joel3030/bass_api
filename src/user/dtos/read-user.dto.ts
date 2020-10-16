import { Exclude, Expose } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

@Exclude()
export class ReadUserDto {
  @IsString()
  _is: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(25, { message: 'username is too long' })
  @Expose()
  username: string;

  @IsNotEmpty()
  @IsString()  
  password: string;

  @IsNotEmpty()
  @IsString()
  employee: any;

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
