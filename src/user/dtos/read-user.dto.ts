import { Exclude, Expose, Type } from 'class-transformer';
import { Employee } from '../../employee/schemas/employee.schema';
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
  employee: Employee[];

  @Expose()
  roles: string[];

  @Expose()
  status: boolean;

  @Expose()
  create_at: Date;

  @Expose()
  update_at: Date;
}
