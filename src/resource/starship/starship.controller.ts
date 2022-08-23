import { Response, Request } from "express";

export const getAllStarships = (req: Request, res: Response) => {
    res.status(200).json([]);
}

export const getStarshipById = (req: Request, res: Response) => {
    res.status(200).json({});
}

export const postNewStarship = (req: Request, res: Response) => {
    res.status(201).json({});
}

export const updateStarshipById = (req: Request, res: Response) => {
    res.status(200).json([]);
}

export const deleteAllStarship = (req: Request, res: Response) => {
    res.status(200).json(null);
}

export const deleteStarshipById = (req: Request, res: Response) => {
    res.status(200).json(null);
}

