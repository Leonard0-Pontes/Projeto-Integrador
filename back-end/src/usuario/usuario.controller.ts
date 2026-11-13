import { Controller, Body, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';


@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuariosService: UsuarioService) {}

    @Post()
    criar(@Body() body: CriarUsuarioDto) {
        return this.usuariosService.criarNovoUsuario(body);
    }
}
