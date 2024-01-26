const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const jwtPassword = "1234";

app.use(express.json());

const users = [
  {
    name: "Zaid",
    username: "Zaid944",
    password: "$zaid109@#",
  },
  {
    name: "Anas",
    username: "Anas123",
    password: "$anas109@#",
  },
  {
    name: "Rohan",
    username: "Rohan_Ray",
    password: "$rohan345",
  },
];

function userExists(username, password) {
  let userExists = false;
  users.map((user) => {
    if (user.username == username && user.password == password) {
      userExists = true;
    }
  });
  return userExists;
}

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "user not exists",
    });
  }
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    // it will verify that jwtPassword is correct
    const decode = jwt.verify(token, jwtPassword);
    const username = decode.username;
    return res.json({
      users: users.filter((user) => {
        if (user.username == username) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Hello");
});

