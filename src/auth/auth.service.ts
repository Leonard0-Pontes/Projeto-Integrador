import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {
  UsuarioAutenticado,
  UsuarioService,
} from '../usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService
  ) {}

  async validarUsuario(email: string, senha: string) {
    const usuario = this.usuarioService.buscarPorEmail(email);

    if (!usuario) {
      return null;
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return null;
    }

    const { senha: _senha, ...principal } = usuario;
    return principal;
  }

  login(usuario: UsuarioAutenticado) {
    const payload = {
      sub: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      funcao: usuario.funcao,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}