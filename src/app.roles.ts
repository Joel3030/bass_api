import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
  ADMIN = 'ADMIN',

}

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(AppRoles.ADMIN)  
  .readAny()
  .createAny()
  .updateAny()
  .deleteAny();
