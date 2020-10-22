import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadInventoryDto {
  @Expose()
  readonly _id: string;

  @Expose()
  readonly existence: number;

  @Expose()
  readonly price: number;

  @Expose()
  readonly expiration: Date;

  @Expose()
  readonly create_at: Date;

  @Expose()
  readonly update_at: Date;
}
