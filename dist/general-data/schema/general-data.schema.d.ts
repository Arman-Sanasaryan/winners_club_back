/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/user/user.schema';
export type GeneralDataDocument = GeneralData & Document;
export declare class GeneralData {
    user: User;
    A242: number;
    D244: number;
    accumulatedBalance: number;
    CG4: number;
    CH4: number;
    E242: number;
}
export declare const GeneralDataSchema: MongooseSchema<GeneralData, import("mongoose").Model<GeneralData, any, any, any, Document<unknown, any, GeneralData> & GeneralData & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, GeneralData, Document<unknown, {}, import("mongoose").FlatRecord<GeneralData>> & import("mongoose").FlatRecord<GeneralData> & {
    _id: import("mongoose").Types.ObjectId;
}>;
