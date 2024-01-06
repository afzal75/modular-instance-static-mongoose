import { ICat } from "./Cat.interface";
import { Cat } from "./Cat.modules";

// const createCat = async (payload: ICat): Promise<ICat> => {
//     //mongoose buit in instance method

//     const cat = new Cat(payload) //built in instance method
//     // const result = await Cat.create(payload)
//     const catId = await cat.geterateId()
//     cat.id = catId;
//     const result = cat.save()     // build in instance method
//     return result;
// }

// using static
const createCat = async (payload: ICat) => {
    const catId = await Cat.generateId() // custom statics method
    const data = { ...payload, id: catId };
    const result = await Cat.create(data);
    return result;
}

const getAllCat = async () => {
    const result = await Cat.find({}).exec();
    return result;
}

export const CatService = {
    createCat,
    getAllCat
}