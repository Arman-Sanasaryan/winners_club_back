"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralDataModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const general_data_service_1 = require("./general-data.service");
const general_data_controller_1 = require("./general-data.controller");
const user_module_1 = require("../user/user.module");
const general_data_schema_1 = require("./schema/general-data.schema");
let GeneralDataModule = class GeneralDataModule {
};
exports.GeneralDataModule = GeneralDataModule;
exports.GeneralDataModule = GeneralDataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: general_data_schema_1.GeneralData.name, schema: general_data_schema_1.GeneralDataSchema },
            ]),
            user_module_1.UserModule,
        ],
        controllers: [general_data_controller_1.GeneralDataController],
        providers: [general_data_service_1.GeneralDataService],
    })
], GeneralDataModule);
//# sourceMappingURL=general-data.module.js.map