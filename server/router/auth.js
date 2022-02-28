const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../models/userSchema");

router.post("/register", async (req, res) => {
  // console.log(req.body);
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Fill all data." });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist." });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Passwords don't match." });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {

    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "No email or password." });
    }
    const userLogin = await User.findOne({ email: email });

    console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcryptjs.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
      });
      if (!isMatch) {
        res.status(400).json({ error: "Passwords don't match." });
      } else {
        res.status(200).json({ message: "Login Successful" });
      }
    } else {
      res.status(400).json({ error: "Email not found." });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
