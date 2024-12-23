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
exports.GeneralDataController = void 0;
const common_1 = require("@nestjs/common");
const general_data_service_1 = require("./general-data.service");
const create_general_data_dto_1 = require("./dto/create-general-data.dto");
let GeneralDataController = class GeneralDataController {
    constructor(generalDataService) {
        this.generalDataService = generalDataService;
    }
    async createGeneralData(userId, createGeneralDataDto) {
        return this.generalDataService.createGeneralData(createGeneralDataDto, userId);
    }
    async getGeneralDataByUserId(userId) {
        return this.generalDataService.getGeneralDataByUserId(userId);
    }
    async updateGeneralData(userId, updateGeneralDataDto) {
        return this.generalDataService.updateGeneralData(userId, updateGeneralDataDto);
    }
};
exports.GeneralDataController = GeneralDataController;
__decorate([
    (0, common_1.Post)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_general_data_dto_1.CreateGeneralDataDto]),
    __metadata("design:returntype", Promise)
], GeneralDataController.prototype, "createGeneralData", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeneralDataController.prototype, "getGeneralDataByUserId", null);
__decorate([
    (0, common_1.Patch)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_general_data_dto_1.CreateGeneralDataDto]),
    __metadata("design:returntype", Promise)
], GeneralDataController.prototype, "updateGeneralData", null);
exports.GeneralDataController = GeneralDataController = __decorate([
    (0, common_1.Controller)('general-data'),
    __metadata("design:paramtypes", [general_data_service_1.GeneralDataService])
], GeneralDataController);
//# sourceMappingURL=general-data.controller.js.map