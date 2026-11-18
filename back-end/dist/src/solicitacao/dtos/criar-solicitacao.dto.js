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
exports.CriarSolicitacaoDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../../generated/prisma/enums");
class CriarSolicitacaoDto {
    disciplina_id;
    assunto;
    descricao;
    data_preferida;
    horario_preferido;
    modalidade_preferida;
    local_preferido;
}
exports.CriarSolicitacaoDto = CriarSolicitacaoDto;
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CriarSolicitacaoDto.prototype, "disciplina_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CriarSolicitacaoDto.prototype, "assunto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CriarSolicitacaoDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], CriarSolicitacaoDto.prototype, "data_preferida", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsMilitaryTime)(),
    __metadata("design:type", String)
], CriarSolicitacaoDto.prototype, "horario_preferido", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.modalidadePref),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CriarSolicitacaoDto.prototype, "modalidade_preferida", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CriarSolicitacaoDto.prototype, "local_preferido", void 0);
//# sourceMappingURL=criar-solicitacao.dto.js.map