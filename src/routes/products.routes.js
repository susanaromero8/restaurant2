const { Router } = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products.controller");

const router = Router();

router.get("/products", getAllProducts);

router.get("/products/:id", getProduct);

router.post("/products", upload.single("img_pd"), createProduct);

router.delete("/products", deleteProduct);

router.put("/products/:id", upload.single("img_pd"), updateProduct);

module.exports = router;
