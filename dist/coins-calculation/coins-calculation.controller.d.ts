import { CreateCoinsCalculationDto } from './dto/create-coins-calculation.dto';
import { CoinsCalculationsService } from './coins-calculation.service';
export declare class CoinsCalculationsController {
    private readonly coinsCalculationsService;
    private readonly logger;
    constructor(coinsCalculationsService: CoinsCalculationsService);
    saveCoinsCalculation(createCoinsCalculationDto: CreateCoinsCalculationDto, req: any): Promise<import("./schema/coins-calculation.schema").CoinsCalculation>;
    getUserCoinsCalculations(userId: string): Promise<import("./schema/coins-calculation.schema").CoinsCalculation[]>;
    deleteCoinsCalculation(userId: string, dataId: string): Promise<import("./schema/coins-calculation.schema").CoinsCalculation>;
}
