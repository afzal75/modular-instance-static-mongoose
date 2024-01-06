/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { CatService } from "./Cat.service";

const createCat = async (req: Request, res: Response) => {
    try {
        // destructring for spread operator

        // const { ...data } = req.body;
        // const result = await CatService.createCat(data)
        const result = await CatService.createCat(req.body)
        res.status(201).json({
            success: true,
            message: "Cat Created Successfully",
            data: result
        })
    }
    catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Cat Creation Failed"
        })
    }
}
const getAllCat = async (req: Request, res: Response) => {
    try {
        // destructring for spread operator

        // const { ...data } = req.body;
        // const result = await CatService.createCat(data)
        const result = await CatService.getAllCat()
        res.status(201).json({
            success: true,
            message: "All Cat retrived Successfully",
            data: result
        })
    }
    catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Cat Creation Failed"
        })
    }
}

export const CatController = {
    createCat,
    getAllCat
}