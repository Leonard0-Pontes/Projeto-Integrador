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
exports.SolicitacaoController = void 0;
const common_1 = require("@nestjs/common");
const solicitacao_service_1 = require("./solicitacao.service");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const criar_solicitacao_dto_1 = require("./dtos/criar-solicitacao.dto");
const enums_1 = require("../generated/prisma/enums");
let SolicitacaoController = class SolicitacaoController {
    solicitacoesService;
    constructor(solicitacoesService) {
        this.solicitacoesService = solicitacoesService;
    }
    criar(body, request) {
        return this.solicitacoesService.criar(body, request.user.id);
    }
    listar(request) {
        return this.solicitacoesService.listar(request.user.id);
    }
    buscarPorId(id, request) {
        return this.solicitacoesService.buscarPorId(id, request.user.id);
    }
};
exports.SolicitacaoController = SolicitacaoController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.funcaoUsuario.Aluno, enums_1.funcaoUsuario.Monitor),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_solicitacao_dto_1.CriarSolicitacaoDto, Object]),
    __metadata("design:returntype", void 0)
], SolicitacaoController.prototype, "criar", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.funcaoUsuario.Aluno, enums_1.funcaoUsuario.Monitor),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SolicitacaoController.prototype, "listar", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.funcaoUsuario.Aluno, enums_1.funcaoUsuario.Monitor),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], SolicitacaoController.prototype, "buscarPorId", null);
exports.SolicitacaoController = SolicitacaoController = __decorate([
    (0, common_1.Controller)('solicitacoes'),
    __metadata("design:paramtypes", [solicitacao_service_1.SolicitacaoService])
], SolicitacaoController);
//# sourceMappingURL=solicitacao.controller.js.map