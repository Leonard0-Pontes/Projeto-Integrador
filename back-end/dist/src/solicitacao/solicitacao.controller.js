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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacaoController = void 0;
const common_1 = require("@nestjs/common");
const solicitacao_service_1 = require("./solicitacao.service");
let SolicitacaoController = class SolicitacaoController {
    solicitacoesService;
    constructor(solicitacoesService) {
        this.solicitacoesService = solicitacoesService;
    }
};
exports.SolicitacaoController = SolicitacaoController;
exports.SolicitacaoController = SolicitacaoController = __decorate([
    (0, common_1.Controller)('solicitacoes'),
    __metadata("design:paramtypes", [solicitacao_service_1.SolicitacaoService])
], SolicitacaoController);
//# sourceMappingURL=solicitacao.controller.js.map