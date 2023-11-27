import { Request, Response } from 'express';
import { addCat, getAllcats } from './Cat.service';

export const createCatController = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;
    console.log(data);

    const result = await addCat(data);

    res.status(200).json({
      success: true,
      message: 'Cat created successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};
export const getAllCatController = async (req: Request, res: Response) => {
  try {
    const result = await getAllcats();

    res.status(200).json({
      success: true,
      message: 'Cats fetched successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};
