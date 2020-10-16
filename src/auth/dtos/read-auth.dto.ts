import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadAuthDto{
  @Expose()
  _id: string;

  @Expose()
  username: string;
  
  password: string;

  @Expose()
  employee: any;

  @Expose()
  status: boolean;

  @Expose()
  create_at: Date;

  @Expose()
  update_at: Date;
}
