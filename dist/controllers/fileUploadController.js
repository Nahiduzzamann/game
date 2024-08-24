import sharp from "sharp";
import { v1 } from "uuid";
import { fileURLToPath } from 'url';
import path from "path";
// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const uploadImageSquire = async (req, res) => {
    const name = v1();
    await sharp(req.file?.buffer)
        .resize({ width: 800, height: 800 })
        .png()
        .toFile(path.join(__dirname, `../data/images/${name}-${req.file?.originalname}`));
    return { path: `/data/images/${name}-${req.file?.originalname}` };
};
export const uploadImageBanner = async (req, res) => {
    const name = v1();
    await sharp(req.file?.buffer)
        .png().resize(1800, 660, {
        fit: 'cover' // Crop the image to cover the specified dimensions
    })
        .toFile(path.join(__dirname, `../data/images/${name}-${req.file?.originalname}`));
    return { path: `/data/images/${name}-${req.file?.originalname}` };
};
