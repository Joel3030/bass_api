import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class updateEmployeeDto {
  @Expose()
  _id: string;

  @Expose()
  @Type(() => FullName)
  fullname: FullName[];

  @Expose()
  idcard: string;

  @Expose()
  @Type(() => Contacts)
  contacts: Contacts[];

  @Expose()
  @Type(() => Location)
  location: Location[];

  @Expose()
  status: boolean;

  @Expose()
  create_at: Date;

  @Expose()
  update_at: Date;
}

class FullName {
  name: string;
  lastname: string;
}

class Contacts {
  telephone: string;
  phone: string;
  email: string;
}

class Location {
  address: string;
  sector: string;
  municipio: string;
  zipcode: number;
}
