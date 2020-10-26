import { Exclude, Expose, Type } from 'class-transformer';
import { ReadEmployeeDto } from '../../employee/dtos/read-employee.dto';

@Exclude()
export class ReadUserDto {
  @Expose()
  _id: string;

  @Expose()
  username: string;

  password: string;

  @Expose()
  @Type(() => ReadEmployeeDto)
  employee: ReadEmployeeDto[];

  @Expose()
  roles: string[];

  @Expose()
  status: boolean;

  @Expose()
  create_at: Date;

  @Expose()
  update_at: Date;
}
