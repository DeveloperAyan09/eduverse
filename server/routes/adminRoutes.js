const express = require("express")
const { getAllUsers, addEvent, updateEvent, updateProductListing, getAllComments, updateUser } = require("../controllers/adminController")
const adminProtect = require("../middleware/adminMiddleware.js")

const router = express.Router()


router.get("/users",  adminProtect, getAllUsers)
router.put("/users/:uid",  adminProtect, updateUser)
router.post("/event",adminProtect, addEvent)
router.put("/event/:eid", adminProtect, updateEvent)
router.put("/product/:pid", adminProtect, updateProductListing)
router.get("/comment/:eid", adminProtect, getAllComments )

module.exports = router