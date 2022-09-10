import { Schema, model } from 'mongoose';


const RecetteSchema = new Schema({
  title: {
    type: String,
    required: [true, "Le nom de la recette est requise"],
    trim: true,
    maxlength: [20, "Le titre de la recette ne peut pas dépasser 20 caractères"],
  },
  preparation: {
    type: String,
  },
  images: {
    type: String,
  },
});

module.exports = model("Recettes", RecetteSchema);