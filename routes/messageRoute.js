const express = require("express");
const {
  createMessage,
  getMessages,
} = require("../controllers/messageController");

//router
const router = express.Router();

//routes
router.post("/", createMessage);
router.get("/:chatId", getMessages);

module.exports = router;
