import { Response, Request } from "express";

export const getAllBoosters = (req: Request, res: Response) => {
    res.status(200).json([]);
};

export const postToBoosters = (req: Request, res: Response) => {
    res.status(201).json({});
};

export const updateBooster = (req: Request, res: Response) => {
    res.status(200).json([]);
 };

export const deleteBooster = (req: Request, res: Response) => {
    res.status(200).json(null);
};