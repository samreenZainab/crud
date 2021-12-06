const express = require("express");

const router = express.Router();

const userController=require("./controllers/userController")

// const userController = require("./controllers/userController");

router.post("/addUser",userController.addUser)

router.get("/fetchAllUsers",userController.fetchUser)

router.put("/updateUser:id",userController.updateUser)

router.delete("/deleteUse:id",userController.deleteUser)

module.exports = router;