import { Exclude, Expose, Type } from 'class-transformer';
import { ReadCompanyDto } from './';
import { Company } from '../schemas/company.schema';

@Exclude()
export class ReadSellerDto {
  @Expose()
  @Type(() => Fullname)
  fullname: Fullname[];

  @Expose()
  @Type(() => Contacts)
  contacts: Contacts[];

  @Expose()
  @Type(() => Location)
  location: Location[];

  @Expose()
  @Type(() => ReadCompanyDto)
  company: Company[];

  @Expose()
  readonly status: boolean;

  @Expose()
  readonly create_at: Date;

  @Expose()
  readonly update_at: Date;
}

class Fullname {
  readonly name: string;

  readonly lastname: string;
}

class Contacts {
  readonly phone: string;

  readonly email: string;
}

class Location {
  readonly address: string;

  readonly sector: string;

  readonly municipio: string;

  readonly zipcode: number;
}
