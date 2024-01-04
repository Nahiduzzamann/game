import { Response, Request } from 'express';
import {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} from 'http-status-codes';
import games from "../data/games.json"

export const getGameCategories = (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json({ error: error });
    }
}