import { SetMetadata } from '@nestjs/common';
import { funcaoUsuario } from 'src/generated/prisma/enums';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: funcaoUsuario[]) => SetMetadata(ROLES_KEY, roles);