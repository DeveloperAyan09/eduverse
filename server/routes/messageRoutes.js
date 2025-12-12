const express = require("express")
const { getMessages, sendMessage } = require("../controllers/messageController")
const protect = require("../middleware/authMiddleWare")

const router = express.Router()

router.get("/", protect, getMessages)
router.post("/:pid", protect, sendMessage)


module.exports = router