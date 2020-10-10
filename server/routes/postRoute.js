const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Posts = mongoose.model("Posts");
const requireLogin = require("../middleWare/RequireLogin");

router.get("/viewallpost", (req, res) => {
  Posts.find()
    .populate("postBy", " _id name ")
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/mypost",requireLogin,(req, res) => {
  Posts.find({ postBy: req.user._id })
    .populate("postBy", " _id name ")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createPost", requireLogin, (req, res) => {
  const { title, body } = req.body;
  console.log(title, body, "!11111111111");

  if (!title || !body) {
    return res.status(402).json({ error: " please fill All field" });
  }
  console.log(req.user, "userrrrrr");
  const post = new Posts({
    title,
    body,
    postBy: req.user,
  });
  post
    .save()
    .then((savedValue) => {
      res.json({ messsage: `ok ha ya to ${savedValue}` });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
