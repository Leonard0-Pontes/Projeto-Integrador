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
exports.AtualizarMonitoriaDto = void 0;
const class_validator_1 = require("class-validator");
const enums_1 = require("../../generated/prisma/enums");
class AtualizarMonitoriaDto {
    data;
    horario_inicio;
    horario_fim;
    modalidade;
    link;
    status;
    justificativa;
}
exports.AtualizarMonitoriaDto = AtualizarMonitoriaDto;
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], AtualizarMonitoriaDto.prototype, "data", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMilitaryTime)(),
    __metadata("design:type", String)
], AtualizarMonitoriaDto.prototype, "horario_inicio", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMilitaryTime)(),
    __metadata("design:type", String)
], AtualizarMonitoriaDto.prototype, "horario_fim", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.modalidadePref),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AtualizarMonitoriaDto.prototype, "modalidade", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AtualizarMonitoriaDto.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.statusMonitor),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AtualizarMonitoriaDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], AtualizarMonitoriaDto.prototype, "justificativa", void 0);
//# sourceMappingURL=atualizar-monitoria.dto.js.map