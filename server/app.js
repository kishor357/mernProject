const dotenv = require('dotenv');
const mongoose = require("mongoose");
const express = require("express");
const app = express();
dotenv.config({path: './config.env'});


require('./db/conn');

app.use(express.json());


app.use(require('./router/auth'));


// const User = require('./models/userSchema');

const PORT = process.env.PORT;


//middleware

const middleware = (req, res, next) => {
  console.log(`middleware`);
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello App from Router`);
});

app.get("/about", middleware, (req, res) => {
  res.send("Hello About");
});

app.get("/contact", (req, res) => {
  res.cookie("test", "thapa");
  res.send("Hello Contact");
});

app.get("/signin", (req, res) => {
  res.send("Hello Signin");
});

app.get("/signup", (req, res) => {
  res.send("Hello Signup");
});

app.listen(5000, () => {
  console.log(`Server is running at port ${PORT}`);
});
