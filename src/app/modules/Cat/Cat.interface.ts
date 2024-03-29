
import { Model } from "mongoose";

export type ICat = {
    id: number;
    name: string;
    age: number;
    color?: string;
    secret?: string
}

// instance Methods

// export type ICatMethods = {
//     geterateId(): Promise<void>
// }


export interface ICatModel extends Model<ICat> {
    generateId(): Promise<void>;
}


// export type CatModel = Model<ICat, Record<string, never>>;