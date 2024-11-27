const { Router } = require("express");
const {
  getAllCategory,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category.controller");

const router = Router();

router.get("/category", getAllCategory);

router.get("/category/:id", getCategory);

router.post("/category", createCategory);

router.delete("/category", deleteCategory);

router.put("/category/:id", updateCategory);

module.exports = router;
