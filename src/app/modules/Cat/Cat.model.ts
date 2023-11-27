// const catSchema = new Schema<ICat, CatModel, ICatMethods>({
//   id: { type: Number, required: true, unique: true },
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
//   color: { type: String },
//   secret: { type: String },
// });

import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../config';
import { ICat, ICatModel } from './Cat.interface';

// instance methods
// catSchema.methods.generateId = async function () {
//   try {
//     const lastCat = await Cat.findOne().sort({ _id: -1 }).exec();
//     if (!lastCat) return 1;
//     return lastCat.id + 1;
//   } catch (error) {
//     throw new Error("Can't generate unique id");
//   }
// };

// export const Cat = model<ICat, CatModel>('Cat', catSchema);

const catSchema = new Schema<ICat, ICatModel>(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    color: { type: String },
    secret: { type: String || null },
  },
  {
    timestamps: true,
  },
);

// pre middleware hook
catSchema.pre('save', async function () {
  // console.log(this, 'pre save hook');
  this.secret = await bcrypt.hash(
    this.secret,
    Number(config.bcrypt_salt_rounds),
  );
});

// post middleware hook
catSchema.post('save', async function (doc, next) {
  // console.log(doc, 'post save hook');
  doc.secret = '****';
  next();
});

// static methods
catSchema.statics.generateId = async function () {
  try {
    const lastCat = await Cat.findOne().sort({ _id: -1 }).exec();
    if (!lastCat) return 1;
    return lastCat.id + 1;
  } catch (error) {
    throw new Error("Can't generate unique id");
  }
};

export const Cat = model<ICat, ICatModel>('Cat', catSchema);

// 2023 03 10 04
