import { Exclude, Expose, Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class ReadEmployeeDto {
  @Expose()
  readonly _id: string;

  @Expose()
  @IsNotEmpty()
  @Type(() => FullName)
  readonly fullname: FullName[];

  @Expose()
  readonly idcard: string;

  @Expose()
  @Type(() => Contacts)
  readonly contacts: Contacts[];

  @Expose()
  @Type(() => Location)
  readonly location: Location[];

  @Expose()
  readonly status: boolean;

  @Expose()
  readonly create_at: Date;

  @Expose()
  readonly update_at: Date;
}

class FullName {
  @IsNotEmpty()
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
