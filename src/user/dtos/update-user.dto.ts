import { IsBoolean, IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';

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
  createAt: Date;

  @IsNotEmpty()
  @IsDate()
  updateAt: Date;


}
