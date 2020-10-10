const express = require("express");
const mongoose = require("mongoose");
const Jwt = require("jsonwebtoken");
const { JWT_Secrete } = require("../Config/Key");
const router = express.Router();
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req.headers);
  if (!authorization) {
    console.log(req.headers);
    res.status(402).json({ error: "you must be loggin" });
  } else {
    const token = authorization.replace("Bearer ", "");
    console.log("@@@@@@@@@@@", token, "@@@@@@@@@@@");
    Jwt.verify(token, JWT_Secrete, (err, payload) => {
      if (err) {
        res.status.json({ error: "you must be loggin" });
      }
      console.log(payload, "!!!!!!!!");
      const { _id } = payload;
      User.findById(_id).then((UserData) => {
        req.user = UserData;
        console.log(req.user, "QQQQQ");
        next();
      });
      
    });
  }
};
