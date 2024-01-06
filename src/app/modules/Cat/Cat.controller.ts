/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { CatService } from "./Cat.service";

const createCat = async (req: Request, res: Response) => {
    try {
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

export const CatController = {
    createCat
}