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
  @Expose()
  _id: string;

  @Expose()
  username: string;
  
  password: string;

  @Expose()
  employee: any;

  @Expose()
  status: boolean;

  @Expose()
  create_at: Date;

  @Expose()
  update_at: Date;
}
