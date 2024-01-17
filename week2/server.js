const express = require("express");
const uniqid = require("uniqid");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
// create a todo app
// make a HTTP server using C/C++/Rust/Golang

let todos = [
  {
    id: uniqid(),
    title: "Random",
    content: "ABC",
  },
];

// body parser
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(todos);
});

app.post("/add", (req, res) => {
  //   console.log(req.body);
  todos.push({ id: uniqid(), ...req.body });
  //   console.log(req.headers);
  res.send({
    msg: "data added successfully",
  });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  todos.map((todo) => {
    if (todo.id === id) {
      todo.title = req.body.title;
      todo.content = req.body.content;
    }
  });
  //   console.log(todos);
  res.send({
    msg: "data updated successfully",
  });
});

app.delete("/delete/:id", (req, res) => {
  todos = todos.filter((todo) => todo.id !== req.params.id);
  res.send({
    msg: "data deleted successfully",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// vercel has single machine
// when a request comes need to be authorized to the server
