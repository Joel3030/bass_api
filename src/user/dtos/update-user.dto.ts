import { IsBoolean, IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Exclude } from 'class-transformer';

export class updateUserDto {
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
  @IsBoolean()
  status: boolean;

  @IsNotEmpty()
  @IsDate()
  create_at: Date;

  @IsNotEmpty()
  @IsDate()
  update_at: Date;

}
