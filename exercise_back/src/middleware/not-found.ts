import {  Request, Response } from "express";
const notFound = (req:Request, res:Response) => res.status(404).send("La route n'existe pas");

module.exports = notFound;