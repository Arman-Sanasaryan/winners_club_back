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
var CoinsCalculationsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinsCalculationsController = void 0;
const common_1 = require("@nestjs/common");
const create_coins_calculation_dto_1 = require("./dto/create-coins-calculation.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const coins_calculation_service_1 = require("./coins-calculation.service");
let CoinsCalculationsController = CoinsCalculationsController_1 = class CoinsCalculationsController {
    constructor(coinsCalculationsService) {
        this.coinsCalculationsService = coinsCalculationsService;
        this.logger = new common_1.Logger(CoinsCalculationsController_1.name);
    }
    async saveCoinsCalculation(createCoinsCalculationDto, req) {
        this.logger.log('Received saveCoinsCalculation request');
        this.logger.log(`Request User ID: ${req.user.userId}`);
        return this.coinsCalculationsService.saveCoinsCalculation(createCoinsCalculationDto, req.user.userId);
    }
    async getUserCoinsCalculations(userId) {
        this.logger.log(`Received getUserCoinsCalculations request for userId: ${userId}`);
        return this.coinsCalculationsService.getUserCoinsCalculations(userId);
    }
    async deleteCoinsCalculation(userId, dataId) {
        this.logger.log(`Received deleteCoinsCalculation request for userId: ${userId} and dataId: ${dataId}`);
        return this.coinsCalculationsService.deleteCoinsCalculation(userId, dataId);
    }
};
exports.CoinsCalculationsController = CoinsCalculationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coins_calculation_dto_1.CreateCoinsCalculationDto, Object]),
    __metadata("design:returntype", Promise)
], CoinsCalculationsController.prototype, "saveCoinsCalculation", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoinsCalculationsController.prototype, "getUserCoinsCalculations", null);
__decorate([
    (0, common_1.Delete)(':userId/:dataId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('dataId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CoinsCalculationsController.prototype, "deleteCoinsCalculation", null);
exports.CoinsCalculationsController = CoinsCalculationsController = CoinsCalculationsController_1 = __decorate([
    (0, common_1.Controller)('coins-calculations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [coins_calculation_service_1.CoinsCalculationsService])
], CoinsCalculationsController);
//# sourceMappingURL=coins-calculation.controller.js.map