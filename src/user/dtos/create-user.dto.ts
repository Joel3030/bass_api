import { IsNotEmpty, IsString, MaxLength, MinLength,} from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()  
  @MaxLength(25, {message: 'the username is too long'})
  userName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, {message: 'the password is too short'}) 
  password: string;
  
  @IsNotEmpty()
  @IsString()
  employee: any 

}
