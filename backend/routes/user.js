const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");

// route d'inscription
router.post("/register", userCtrl.signup);
// route de connexion
router.post("/login", userCtrl.login);

// route de recuperation des users
router.get("/", auth, userCtrl.getAllUsers);
// route de recuperation de l'user
router.get("/:id", auth, userCtrl.getUserProfile);
// route de modification du profil pour amélioration plutard
router.put("/profil", auth, userCtrl.updateUserProfile);
// route de suppression de l'user
router.delete("/:id", auth, userCtrl.deleteUser);

module.exports = router;
