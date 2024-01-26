const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://new-user:EZftCGfQzXu45k3j@cluster0.ufx3n.mongodb.net/databaseName"
);

const User = mongoose.model("Users", {
  username: String,
  email: String,
  password: String,
});

// const user = new User({
//   username: "Zaid",
//   email: "random",
//   password: "123",
// });

// user.save();

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.json({
      msg: "user already exists",
    });
  }
  const user = new User({
    username,
    password,
    email,
  });
  user.save();
  res.json({
    msg: "done",
  });
});

app.listen(3000);
