import { NextFunction, Request, Response } from "express";
const asyncWrapper = (fn:any) => {
    return async (req : Request, res : Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (err) {
            next(err);
        }
    };
};

module.exports = asyncWrapper