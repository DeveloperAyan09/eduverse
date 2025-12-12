const express = require("express")
const { addComment, getComments } = require("../controllers/commentController")
const protect = require("../middleware/authMiddleWare.js")

const router = express.Router()


router.get("/", getComments)
router.post("/", protect, addComment)


module.exports = router

