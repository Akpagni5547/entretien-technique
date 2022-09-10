import { Router } from "express";
const router = Router();
const {
  getAllRecettes,
  createRecette,
  getRecette,
  updateRecette,
  deleteRecette,
  editRecette,
} = require("../controllers/recettesControllers");

router.route("/").get(getAllRecettes).post(createRecette);
router
  .route("/:id")
  .get(getRecette)
  .patch(updateRecette)
  .delete(deleteRecette)
  .put(editRecette);

module.exports = router;
