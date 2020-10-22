import { Exclude, Type, Expose } from 'class-transformer';

@Exclude()
export class ReadClientDto {
  @Expose()
  readonly _id: string;

  @Expose()
  @Type(() => Fullname)
  readonly fullname: Fullname[];

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

class Fullname {
  readonly name: String;

  readonly lastname: String;
}

class Contacts {
  readonly telephone: string;

  readonly phone: string;

  readonly email: string;
}

class Location {
  readonly address: string;

  readonly sector: string;

  readonly municipio: string;

  readonly zipcode: number;
}
