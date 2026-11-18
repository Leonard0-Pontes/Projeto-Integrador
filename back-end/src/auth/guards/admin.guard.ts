import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const user = request.user;

    if (!user?.id) {
      throw new UnauthorizedException('Usuário não autenticado.');
    }

    const usuario = await this.prisma.usuario.findUnique({
      where: {
        id: user.id,
      },
      select: {
        is_admin: true,
      },
    });

    if (!usuario || !usuario.is_admin) {
      throw new ForbiddenException(
        'Você não possui permissão para acessar este recurso.',
      );
    }

    return true;
  }
}