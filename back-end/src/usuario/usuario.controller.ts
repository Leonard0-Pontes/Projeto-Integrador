import { Controller, Body, Post, UseGuards, Patch, Param, ParseIntPipe, Get } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { AdminGuard } from 'src/auth/guards/admin.guard';


@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuariosService: UsuarioService) {}
    @Post()
    criarUsuario(@Body() body: CriarUsuarioDto) {
        return this.usuariosService.criarNovoUsuario(body);
    }

    @UseGuards(JwtAuthGuard, AdminGuard)
    @Patch(':id/admin')
    tornarAdmin(@Param('id', ParseIntPipe) id: number) {
        return this.usuariosService.tornarAdmin(id)
    }

    @UseGuards(JwtAuthGuard, AdminGuard)
    @Get()
    listarUsuarios() {
        return this.usuariosService.listarUsuarios()
    }

    @UseGuards(JwtAuthGuard, AdminGuard)
    @Get(':email')
    buscarUsuario(@Param('email') email: string) {
        return this.usuariosService.buscarUsuario(email)
    }
}
