import { Exclude, Expose } from 'class-transformer';
import { Employee } from '../../employee/schemas/employee.schema';

@Exclude()
export class ReadUserDto {
  @Expose()
  _id: string;

  @Expose()
  username: string;

  password: string;

  @Expose()
  employee: Employee;

  @Expose()
  roles: string[];

  @Expose()
  status: boolean;

  @Expose()
  create_at: Date;

  @Expose()
  update_at: Date;
}
