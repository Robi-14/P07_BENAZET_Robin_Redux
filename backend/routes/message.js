const express = require("express");
const router = express.Router();
const messageCtrl = require("../controllers/message");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// route d'envoie du message
router.post("/new", auth, multer, messageCtrl.createMessage);
// route de recuperation des messages
router.get("/", auth, messageCtrl.getAllMessages);
// route de suppression des messages
router.delete("/:id", auth, messageCtrl.deleteMessage);
// route de recuperation d'un message
router.get("/:id", auth, messageCtrl.getOneMessage);
// route de modification du message
router.put("/:id", auth, multer, messageCtrl.modifyMessage);

module.exports = router;
