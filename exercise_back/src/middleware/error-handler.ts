import { Request, Response } from "express";
const { CustomAPIError } = require("../errors/custom-errors");
const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Quelques chose s'est mal passé, veuillez réessayer svp" });
};

module.exports = errorHandlerMiddleware;
