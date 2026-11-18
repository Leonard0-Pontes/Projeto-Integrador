import { Controller, Body, Get, Post, UseGuards } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { CriarDisciplinaDto } from './dtos/criar-disciplina.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AdminGuard } from 'src/auth/guards/admin.guard';

@Controller('disciplina')
export class DisciplinaController {
    constructor(private readonly disciplinaService: DisciplinaService) {}
    @UseGuards(JwtAuthGuard)
    @Get()
    listar() {
        return this.disciplinaService.listar();
    }

    @UseGuards(JwtAuthGuard, AdminGuard)
    @Post()
    criar(@Body() body: CriarDisciplinaDto) {
        return this.disciplinaService.criar(body);
    }
}
