import { Type } from 'class-transformer';
export class CreateEmployeeDto {
  @Type(() => FullName)
  fullname: FullName[];

  idcard: string;

  @Type(() => Contacts)
  contacts: Contacts[];

  @Type(() => Location)
  location: Location[];
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
