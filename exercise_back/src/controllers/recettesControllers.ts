const Recettes = require("../models/recette");
import { NextFunction, Request, Response } from "express";
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-errors");

const getAllRecettes = asyncWrapper(async (req: Request, res : Response)  => {
  const recettes = await Recettes.find({});
  res
    .status(200)
    .json({ status: "success", data: { recettes, nombreRecettes: recettes.length } });
});

const createRecette = asyncWrapper(async (req: Request, res : Response)  => {
  try {
    const recette = await Recettes.create(req.body);
    return res.status(201).json({ recette });
  } catch (err) {
    res.status(500).send(err);
  }
});

const getRecette = asyncWrapper(async (req: Request, res : Response, next:NextFunction) => {
  const { id: recetteId } = req.params;
  const recette = await Recettes.findById(recetteId);
  if (!recette) {
    return next(createCustomError(`Aucune recette avec cet id : ${recetteId}`, 404));
  }
  return res.status(200).json({ recette });
});

const updateRecette = async (req: Request, res : Response, next:NextFunction)  => {
  const { id: recetteId } = req.params;

  const recette = await Recettes.findOneAndUpdate({ _id: recetteId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!recette) {
    return next(createCustomError(`Aucune recette avec cet id: ${recetteId}`, 404));
  }

  res.status(200).json({ recette });
};

const editRecette = asyncWrapper(async (req: Request, res : Response, next:NextFunction)  => {
  const { id: recetteId } = req.params

  const recette = await Recettes.findOneAndUpdate({ _id: recetteId }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true,
  })

  if (!recette) {
    return next(createCustomError(`Aucune recette avec cet id : ${recetteId}`, 404))
  }
  res.status(200).json({ recette })
});

const deleteRecette = asyncWrapper(async (req: Request, res : Response, next:NextFunction)  => {
  const { id: recetteId } = req.params;
  const recette = await Recettes.findOneAndDelete({ _id: recetteId });
  if (!recette) {
    return next(createCustomError(`Aucune recette avec cet id : ${recetteId}`, 404));
  }
  res.status(200).json({ recette });
});

module.exports = {
  getAllRecettes,
  createRecette,
  getRecette,
  updateRecette,
  deleteRecette,
  editRecette,
};
