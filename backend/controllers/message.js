const models = require("../models");
const fs = require("fs");
const jwt = require("jsonwebtoken");

// route
// creation du message
exports.createMessage = (req, res, next) => {
  // recuperation de l'user Id dans le token
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, `${process.env.TOKEN}`);
  const userId = decodedToken.userId;

  const content = req.body.content;
  // verification de l'user
  models.User.findOne({
    where: { id: userId },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
    })
    .catch((err) =>
      res.status(500).json({ error: "impossible de verifier l'utilisateur" })
    );
  // creation du message avec , le content , et l'image, likes pour la suite et l'userId
  models.Message.create({
    content: content,
    attachment: req.file
      ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
      : null,
    likes: 0,
    UserId: userId,
  })
    //si ok on renvoie status 201 sinon on catch erreur
    .then((message) => res.status(201).json(message))
    .catch((err) => res.status(400).json({ error }));
};

// recuperations de tout les messages
exports.getAllMessages = (req, res, next) => {
  models.Message.findAll({
    // liste les message par un ordre descendant
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: models.User,
        attributes: ["firstname", "lastname"],
      },
    ],
  })
    // si ok status 200 sinon on catch erreur 400
    .then((messages) => res.status(200).json(messages))
    .catch((error) => res.status(400).json({ error }));
};

// recuperation d'un message avec findOne
exports.getOneMessage = (req, res, next) => {
  models.Message.findOne({ where: { id: req.params.id } })
    .then((message) => res.status(200).json(message))
    .catch((error) => res.status(400).json({ error }));
};
// suppression du message avec destroy  et fs.unlink pour l'image
exports.deleteMessage = (req, res, next) => {
  models.Message.findOne({
    where: { id: req.params.id },
  }).then((message) => {
    const filename = message.attachment.split("/images")[1];
    fs.unlink(`images/${filename}`, () => {
      models.Message.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: "message supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
    });
  });
};

// modification du message
exports.modifyMessage = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, `${process.env.TOKEN}`);
  const userId = decodedToken.userId;

  models.Message.findOne({
    where: { id: req.params.id },
  })
  .then((message) => {
    // si il ya une image, on supprime l'ancienne image avant de modifier le message
    if (req.file) {
      const filename = message.attachment.split("/images")[1];
      fs.unlink(`images/${filename}`, () => {
        models.Message.update(
          {
            content: req.body.content,
            attachment: req.file
              ? `${req.protocol}://${req.get("host")}/images/${
                  req.file.filename
                }`
              : null,
          },
          { where: { id: req.params.id } }
        )
          .then(() => res.status(200).json({ message: "Message modifié !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    } else {
      // sinon on modifie le message directement
      models.Message.update(
        {
          content: req.body.content,
          attachment: req.file
            ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
            : null,
        },
        { where: { id: req.params.id } }
      )
        .then(() => res.status(200).json({ message: "Message modifié !" }))
        .catch((error) => res.status(400).json({ error }));
    }
  });
};
