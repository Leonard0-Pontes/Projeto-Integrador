import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsuarioJwt } from 'src/usuario/usuario.service';

type JwtPayload = {
  sub: UsuarioJwt['id'];
  nome: UsuarioJwt['nome'];
  email: UsuarioJwt['email'];
  funcao: UsuarioJwt['funcao'];
  curso: UsuarioJwt['curso'];
  periodo: UsuarioJwt['periodo']
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET nao foi definido');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  validate(payload: JwtPayload) {
    return {
      id: payload.sub,
      nome: payload.nome,
      email: payload.email,
      funcao: payload.funcao,
      curso: payload.curso,
      periodo: payload.periodo,
    };
  }
}