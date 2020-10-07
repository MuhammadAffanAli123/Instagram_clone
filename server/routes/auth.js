const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = mongoose.model("User");
var obj = {
  name: "affan",
  Age: 9,
};
router.get("/", (req, res) => {
  res.send(obj.name);
});

router.post("/signup", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ error: "!! please add All field" });
  }

  User.findOne({ email: email })
    .then((saved) => {
      if (saved) {
        res.status(400).json({ error: "!! email exit " });
      } else {
        bcrypt.hash(password, 12).then((HahPassword) => {
          const user = new User({
            name,
            email,
            password: HahPassword,
          });
          user
            .save()
            .then((user) => {
              res.json({ sucess: "!! Sucessfully added" });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(402).json({ error: "please filled value" });
  } else {
    User.findOne({ email: email }).then((savedEmail) => {
      if (!savedEmail) {
        res.status(402).json({ error: "invalid Text" });
      } else {
        bcrypt
          .compare(password, savedEmail.password)
          .then((match) => {
            if (match) {
              res.json({ message: "sucessfully logined!!" });
            } else {
              res.status(402).json({ error: "Invalid password or email" });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }
});

module.exports = router;
