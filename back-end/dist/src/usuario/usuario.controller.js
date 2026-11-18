"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
const criar_usuario_dto_1 = require("./dtos/criar-usuario.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const admin_guard_1 = require("../auth/guards/admin.guard");
const enums_1 = require("../generated/prisma/enums");
const adicionar_disciplina_dto_1 = require("./dtos/adicionar-disciplina.dto");
let UsuarioController = class UsuarioController {
    usuariosService;
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    criarUsuario(body) {
        return this.usuariosService.criarNovoUsuario(body);
    }
    buscarMeuPerfil(request) {
        return this.usuariosService.buscarMeuPerfil(request.user.id);
    }
    listarMinhasDisciplinas(request) {
        return this.usuariosService.listarDisciplinas(request.user.id, request.user.funcao);
    }
    adicionarDisciplina(body, request) {
        return this.usuariosService.adicionarDisciplina(request.user.id, request.user.funcao, body.disciplina_id);
    }
    removerDisciplina(disciplinaId, request) {
        return this.usuariosService.removerDisciplina(request.user.id, request.user.funcao, disciplinaId);
    }
    tornarAdmin(id) {
        return this.usuariosService.tornarAdmin(id);
    }
    listarUsuarios() {
        return this.usuariosService.listarUsuarios();
    }
    buscarUsuario(email) {
        return this.usuariosService.buscarUsuario(email);
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_usuario_dto_1.CriarUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "criarUsuario", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.funcaoUsuario.Aluno, enums_1.funcaoUsuario.Monitor),
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "buscarMeuPerfil", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.funcaoUsuario.Aluno, enums_1.funcaoUsuario.Monitor),
    (0, common_1.Get)('me/disciplinas'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "listarMinhasDisciplinas", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.funcaoUsuario.Aluno, enums_1.funcaoUsuario.Monitor),
    (0, common_1.Post)('me/disciplinas'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adicionar_disciplina_dto_1.AdicionarDisciplinaDto, Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "adicionarDisciplina", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.funcaoUsuario.Aluno, enums_1.funcaoUsuario.Monitor),
    (0, common_1.Delete)('me/disciplinas/:disciplinaId'),
    __param(0, (0, common_1.Param)('disciplinaId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "removerDisciplina", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, common_1.Patch)(':id/admin'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "tornarAdmin", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "listarUsuarios", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    (0, common_1.Get)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "buscarUsuario", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map