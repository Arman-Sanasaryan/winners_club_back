declare class DataDto {
    Y4: number;
    A242: number;
    D244: number;
    E242: number;
    B4: number;
    C4: number;
    D4: number;
    E4: number;
    G4: number;
    N4: number;
    O4: number;
    P4: number;
    P5: number;
    CG4: number;
    CH4: number;
    Z4: number;
    AI4: number;
    BO4: number;
    AJ4: number;
    AC4: number;
    BF4: number;
    U4: number;
    V4: number;
    W4: number;
    X4: number;
    BE4: number;
    BE242: number;
    B242: number;
    C244: number;
    L6: number;
    AF4: number;
    AG4: number;
    AH4: number;
    AD4: number;
    BG4: number;
    AA4: number;
    BP4: number;
    K8: number;
    K6: number;
    K9: number;
    G6: number;
    F6: number;
    G9: number;
    AE4: number;
    BI4: number;
    AB4: number;
    BR4: number;
    L8: number;
    L9: number;
    I6: number;
    E8: number;
    E9: number;
    BH4: number;
    BQ4: number;
    I8: number;
    I9: number;
    J6: number;
    F8: number;
    F9: number;
    BJ4: number;
    BS4: number;
}
declare class ResultsDto {
    result_BE4: number;
    result_B5: number;
    result_C5: number;
    result_D5: number;
    result_E5: number;
    result_B6: number;
    result_C6: number;
    result_D6: number;
    result_E6: number;
    result_F4: number;
    result_C244: number;
    result_L6: number;
    result_G6: number;
    result_T4: number;
    result_L2: number;
    result_L4: number;
    result_H3: number;
    result_I3: number;
    result_J3: number;
    result_K3: number;
    result_M4: number;
    result_Q4: number;
    priceAccordingAccumulatedBalance: number;
    accumulatedBalance: number;
    accumulatedBalanceForPosition: number;
    averagedRationalTradingMargin: number;
}
export declare class CreateCoinsCalculationDto {
    id: string;
    data: DataDto;
    results: ResultsDto;
    userId: string;
    name: string;
}
export {};