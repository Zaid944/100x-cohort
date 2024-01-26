const express = require("express");
const app = express();

function ageCheck(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

function ageMiddleware(req, res, next) {
  if (req.query.age >= 14) {
    next();
  } else {
    res.json({
      msg: "sorry you are underage",
    });
  }
}

// or if we want to have all routes
// the same middleware
// app.use(middleware)

app.get("/ride1", ageMiddleware, (req, res) => {
  //   if (ageCheck(req.query.age)) {
  //     res.json({
  //       msg: "yayayya",
  //     });
  //   } else {
  //     res.json({
  //       msg: "oh no",
  //     });
  //   }
  res.json({
    msg: "ride1 is great",
  });
});

app.listen(3000);
