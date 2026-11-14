import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsuarioAutenticado, UsuarioJwt } from '../usuario/usuario.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

type RequisicaoLogin = {
  user: UsuarioAutenticado;
};

type RequisicaoJwt = {
  user: UsuarioJwt;
};

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() request: RequisicaoLogin) {
    return this.authService.login(request.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('perfil')
  perfil(@Req() request: RequisicaoJwt) {
    return request.user;
  }
}