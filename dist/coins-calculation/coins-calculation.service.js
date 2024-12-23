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
exports.CoinsCalculationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const coins_calculation_schema_1 = require("./schema/coins-calculation.schema");
let CoinsCalculationsService = class CoinsCalculationsService {
    constructor(coinsCalculationModel) {
        this.coinsCalculationModel = coinsCalculationModel;
    }
    async saveCoinsCalculation(createCoinsCalculationDto, userId) {
        const existingCalculation = await this.coinsCalculationModel.findOne({
            id: createCoinsCalculationDto.id,
            userId,
        });
        if (existingCalculation) {
            Object.assign(existingCalculation, createCoinsCalculationDto);
            return existingCalculation.save();
        }
        else {
            const newCalculation = new this.coinsCalculationModel({
                ...createCoinsCalculationDto,
                userId,
            });
            return newCalculation.save();
        }
    }
    async getUserCoinsCalculations(userId) {
        return this.coinsCalculationModel.find({ userId }).exec();
    }
    async deleteCoinsCalculation(userId, dataId) {
        const calculation = await this.coinsCalculationModel.findOneAndDelete({
            userId,
            id: dataId,
        });
        if (!calculation) {
            throw new common_1.NotFoundException('Coins calculation not found');
        }
        return calculation;
    }
};
exports.CoinsCalculationsService = CoinsCalculationsService;
exports.CoinsCalculationsService = CoinsCalculationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(coins_calculation_schema_1.CoinsCalculation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CoinsCalculationsService);
//# sourceMappingURL=coins-calculation.service.js.map