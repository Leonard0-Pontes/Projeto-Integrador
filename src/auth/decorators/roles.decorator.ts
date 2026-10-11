import { SetMetadata } from '@nestjs/common';
import { Funcao } from '../../usuario/usuario.service';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Funcao[]) => SetMetadata(ROLES_KEY, roles);