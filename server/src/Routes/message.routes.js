const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  sendMessage,
  allMessages,
} = require("../Controllers/messageController");

const router = express.Router();
router.post("/", protect, sendMessage);
router.get("/:chatId", protect, allMessages);

module.exports = router;
