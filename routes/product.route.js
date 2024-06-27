const express = require("express");
const router = express.Router();
const {
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} = require("../controllers/product.controller");

router.post("/", createProduct);

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
