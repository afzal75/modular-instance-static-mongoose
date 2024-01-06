import { Schema } from "mongoose";
import { ICat } from "./Cat.interface";

const CatSchema = new Schema<ICat>({
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
    }
})