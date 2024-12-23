import { GeneralDataService } from './general-data.service';
import { CreateGeneralDataDto } from './dto/create-general-data.dto';
export declare class GeneralDataController {
    private readonly generalDataService;
    constructor(generalDataService: GeneralDataService);
    createGeneralData(userId: string, createGeneralDataDto: CreateGeneralDataDto): Promise<import("./schema/general-data.schema").GeneralData>;
    getGeneralDataByUserId(userId: string): Promise<import("./schema/general-data.schema").GeneralData>;
    updateGeneralData(userId: string, updateGeneralDataDto: CreateGeneralDataDto): Promise<import("./schema/general-data.schema").GeneralData>;
}
