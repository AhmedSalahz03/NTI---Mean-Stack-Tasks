const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct
} = require("../controllers/productController");

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products", addProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

module.exports = router;
