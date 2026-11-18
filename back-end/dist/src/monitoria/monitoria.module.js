"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitoriaModule = void 0;
const common_1 = require("@nestjs/common");
const monitoria_service_1 = require("./monitoria.service");
const monitoria_controller_1 = require("./monitoria.controller");
let MonitoriaModule = class MonitoriaModule {
};
exports.MonitoriaModule = MonitoriaModule;
exports.MonitoriaModule = MonitoriaModule = __decorate([
    (0, common_1.Module)({
        providers: [monitoria_service_1.MonitoriaService],
        controllers: [monitoria_controller_1.MonitoriaController]
    })
], MonitoriaModule);
//# sourceMappingURL=monitoria.module.js.map