const express = require("express");
const {
  createChat,
  findAllChat,
  findAsingleChat,
} = require("../controllers/chatContoller");

//router
const router = express.Router();

//routes
router.post("/", createChat);
router.get("/:userId", findAllChat);
router.get("/find/:firstId/:secondId", findAsingleChat);

module.exports = router;
