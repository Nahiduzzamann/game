import { StatusCodes } from "http-status-codes";
import sharp from "sharp"
import { v1 } from "uuid"
import { Request, Response, } from "express";
import path from "path";
interface Error {
    code: string,
    message: string
}

export const uploadImageSquire = async (req: Request, res: Response) => {
    const name = v1()
    await sharp(req.file?.buffer)
        .resize({ width: 800, height: 800 })
        .png()
        .toFile(path.join(__dirname ,`../data/images/${name}-${req.file?.originalname}`));
    return { path: `/data/images/${name}-${req.file?.originalname}` };
};
export const uploadImageBanner = async (req: Request, res: Response) => {
    const name = v1()
    await sharp(req.file?.buffer)
        .png().resize(1800, 660, {
            fit: 'cover' // Crop the image to cover the specified dimensions
        })
        .toFile(path.join(__dirname ,`../data/images/${name}-${req.file?.originalname}`));
    return { path: `/data/images/${name}-${req.file?.originalname}` };
};