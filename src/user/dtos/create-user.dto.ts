import { IsNotEmpty, IsString, MaxLength,} from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()  
  @MaxLength(25, {message: 'username is too long'})
  username: string;

  @IsNotEmpty()
  @IsString() 
  password: string;
  
  @IsNotEmpty()
  @IsString()
  employee: any 

}
