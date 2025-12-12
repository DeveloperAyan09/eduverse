const express = require("express")
const { getProduct, addProduct, getProducts, updateProduct } = require("../controllers/productController")
const protect = require("../middleware/authMiddleware.js")

const router = express.Router()


router.get("/:id", getProduct)
router.post("/", protect, addProduct)
router.get("/", getProducts)
router.put("/:id",protect, updateProduct)


module.exports = router
