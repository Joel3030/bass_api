  
import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { ACGuard, Role, UseRoles } from 'nest-access-control';

export function Auth(...roles: Role[]) {

  console.log(...roles);
  return applyDecorators(
    UseGuards(JwtAuthGuard, ACGuard),    
    UseRoles(...roles),    
  );
}