const express = require("express")
const { registerUser, loginUser, privateController,  } = require("../controllers/authController")
const protect = require("../middleware/authMiddleWare.js")

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/private", protect, privateController)

module.exports = router

