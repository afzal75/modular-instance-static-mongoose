import { ICat } from "./Cat.interface";
import { Cat } from "./Cat.modules";

const createCat = async (payload: ICat): Promise<ICat> => {
    //mongoose buit in instance method
    const result = await Cat.create(payload)
    return result;
}

const getAllCat = async () => {
    const result = await Cat.find();
    return result
}

export const CatService = {
    createCat,
    getAllCat
}