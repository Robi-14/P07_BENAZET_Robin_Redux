const models = require("../models");
const fs = require("fs");
const jwt = require("jsonwebtoken");

// creation d'un commentaire
exports.createCommentaires = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, `${process.env.TOKEN}`);
  const userId = decodedToken.userId;

  //check de l'user
  models.User.findOne({
    where: {
      id: userId,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
    })
    .catch((err) =>
      res.status(500).json({ error: "impossible de verifier l'utilisateur" })
    );

  //creation du commentaire
  models.commentaires
    .create({
      messageId: req.params.messageId,
      userId: userId,
      content: req.body.content,
    })
    .then((commentaire) => res.status(200).json(commentaire))
    .catch((error) => res.status(500).json(error));
};

// modification du commentaire
exports.modifyCommentaire = (req, res, next) => {
  models.commentaires
    .findOne({
      where: { id: req.params.id },
    })
    .then((commentaire) => {
      models.commentaires
        .update({ content: req.body.content }, { where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: "commentaire modifié !" }))
        .catch((error) => res.status(400).json({ error }));
    });
};

// suppression du commentaires
exports.deleteCommentaire = (req, res, next) => {
  models.commentaires
    .findOne({
      where: { id: req.params.id },
    })
    .then((commentaire) => {
      models.commentaires
        .destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: "commentaire supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
    });
};
// recuperation des commentaires
exports.getAllCommentaires = (req, res, next) => {
  // liste les message par un ordre  acendant
  const order = req.query.order;

  models.commentaires
    .findAll({
      order: [["createdAt", "ASC"]],
      include: [
        {
          model: models.User,
          attributes: ["firstname", "lastname"],
        },
      ],
    })
    .then((commentaires) => res.status(200).json(commentaires))
    .catch((error) => res.status(400).json({ error }));
};
