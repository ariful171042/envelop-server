const express = require("express");
const {
  registerUser,
  loginUser,
  findUser,
  getAllUser,
} = require("../controllers/userController");

//router
const router = express.Router();

//routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/find/:userId", findUser);
router.get("/", getAllUser);

module.exports = router;
