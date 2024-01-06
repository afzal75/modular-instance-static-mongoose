import { Schema, model } from "mongoose";
import { CatModel, ICat, ICatMethods } from "./Cat.interface";

const catSchema = new Schema<ICat, CatModel, ICatMethods>({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true
    },
    color: {
        type: String,
    },
    secret: {
        type: String,
    }
})

// instance methods

catSchema.methods.geterateId = async () => {
    try {
        const lastCat = await Cat.findOne().sort({ _id: -1 }).exec()
        if (!lastCat) {
            return 1
        } else {
            return lastCat.id + 1
        }
    }
    catch (error) {
        throw new Error('Cannot generate unique Id')
    }
}

export const Cat = model<ICat, CatModel>('Cat', catSchema)