import { ICat } from './Cat.interface';
import { Cat } from './Cat.model';

// export const addCat = async (catData: ICat) => {
//   const cat = new Cat(catData); // create an instance
//   const catId = await cat.generateId();
//   cat.id = catId;
//   const result = cat.save(); // build in instance method
//   return result;
// };

export const addCat = async (catData: ICat) => {
  const catId = await Cat.generateId(); // custom statistics method
  const data = { ...catData, id: catId };
  const result = await Cat.create(data);
  return result;
};

export const getAllcats = async () => {
  const result = await Cat.find({}).exec();
  return result;
};
