import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class ReadCompanyDto {
  @Expose()
  readonly _id: String;

  @Expose()
  readonly name: string;

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

class Contacts {
  readonly telephone: String;

  readonly email: String;
}

class Location {
  readonly address: string;

  readonly sector: string;

  readonly municipio: string;

  readonly zipcode: number;
}
