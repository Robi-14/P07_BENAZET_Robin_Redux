// import
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");
const user = require("../models/user");

// routes
exports.signup = (req, res) => {
  //parametre requete
  const email = req.body.email;
  const lastname = req.body.lastname;
  const firstname = req.body.firstname;
  const password = req.body.password;

  //check si tout les inputs sont remplis

  if (
    email == null ||
    lastname == null ||
    firstname == null ||
    password == null
  ) {
    return res.status(400).json("Veuillez remplir tout les champs");
  }

  // verif regex
  const NAME_REGEX = /^[a-zA-Z]+[a-zA-Z-éè]*$/;
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

  if (lastname.length >= 25 || lastname.length <= 3) {
    return res
      .status(400)
      .json("le nom doit avoir minimum 4 lettres et maximum 25 lettres");
  } else if (!NAME_REGEX.test(lastname)) {
    return res
      .status(400)
      .json("Le nom  doit  contenir uniquement des lettres ");
  }

  if (firstname.length >= 25 || firstname.length <= 3) {
    return res
      .status(400)
      .json("Le prenom doit avoir minimum 4 lettres et maximum 25 lettres");
  } else if (!NAME_REGEX.test(firstname)) {
    return res
      .status(400)
      .json("Le prenom  doit  contenir uniquement des lettres ");
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json("Email invalide ");
  }

  if (!PASSWORD_REGEX.test(password)) {
    return res
      .status(400)
      .json(
        " Le mot de passe doit comporter entre 4 et 8 caractères et doit inclure au moins une lettre majuscule, une lettre minuscule et un chiffre."
      );
  }

  // cryptage du mot de passe
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      const user = models.User.create({
        email: email,
        lastname: lastname,
        firstname: firstname,
        password: hash,
      })
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

// connexion
exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // check si les inputs sont remplis
  if (email == null || password == null) {
    return res.status(400).json({ error: "Veuillez remplir tout les champs" });
  }
  // on cherche l'utilisateur par l'email
  models.User.findOne({
    where: { email: email },
  })
    // si pas trouvé on retourne statusn 401
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json("Utilisateur non trouvé, verifiez l'email !");
      }
      // on compare le mot de pas si invalide on renvoie 401, sinon on renvoie status 200 avec le token
      bcrypt
        .compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json("Mot de passe incorrect !");
          }
          res.status(200).json({
            token: jwt.sign(
              { userId: user.id, isAdmin: user.isAdmin },
              `${process.env.TOKEN}`,
              { expiresIn: "1h" }
            ),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

//get

exports.getUserProfile = (req, res) => {
  //recuperation de l'user Id dans le token

  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, `${process.env.TOKEN}`);
  const userId = decodedToken.userId;
  // on recupere les attributs de l'user ou l'userId correspond
  models.User.findOne({
    attributes: ["id", "email", "lastname", "firstname", "isAdmin"],
    where: { id: userId },
  })
    // si ok 201 sinon 404
    .then((user) => {
      if (user) {
        res.status(201).json(user);
      } else {
        res.status(404).json({ error: "utilisateur introuvable" });
      }
    })
    .catch((error) => res.status(500).json({ error: "erreur" }));
};
//put ( amelioration par la suite )
exports.updateUserProfile = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, `${process.env.TOKEN}`);
  const userId = decodedToken.userId;

  models.User.update(
    {
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      email: req.body.email,
    },

    { where: { id: userId } }
  )
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => res.status(500).json({ error }));
};

// recuperation de tous les users avec findAll
exports.getAllUsers = (req, res) => {
  models.User.findAll()

    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }));
};

// supression de l'user avec destroy
exports.deleteUser = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, `${process.env.TOKEN}`);
  const userId = decodedToken.userId;

  models.User.destroy({ where: { id: userId } })
    .then(() => res.status(200).json({ message: "utilisateur supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};
