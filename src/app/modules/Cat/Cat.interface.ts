import { Model } from 'mongoose';

export type ICat = {
  id: number;
  name: string;
  age: number;
  color?: string;
  secret: string
};

// instance methods
// export type ICatMethods = {
//   generateId(): Promise<void>;
// };

// export type CatModel = Model<ICat, Record<string, never>, ICatMethods>;

export interface ICatModel extends Model<ICat> {
  generateId(): Promise<void>;
}

// Billo shop
// Billo-0001
// Billo-0002
