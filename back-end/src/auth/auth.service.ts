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
    const usuario = await this.usuarioService.buscarUsuario(email);

    if (!usuario) {
      return null;
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);

    if (!senhaValida) {
      return null;
    }

    const { senha_hash: _senha, ...principal } = usuario;
    return principal;
  }

  login(usuario: UsuarioAutenticado) {
    const payload = {
      sub: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      funcao: usuario.funcao,
      curso: usuario.curso,
      periodo: usuario.periodo,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}