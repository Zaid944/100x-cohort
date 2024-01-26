const express = require("express");
const z = require("zod");
const app = express();
// rate limiting

// const schema = z.array(z.number());
// const schema = z.object({
//   email: z.string().email(),
//   password: z.string(),
//   country: z.literal("IN").or(z.literal("PALESTINE")),
//   kidneys: z.array(z.number()),
// });
// find time for request resolving
let numberOfReq = 0;
function calculateRequests(req, res, next) {
  numberOfReq++;
  console.log(numberOfReq);
  next();
}

function userMiddleware(req, res, next) {
  if (req.headers.username != "zaid" && req.headers.password != "123") {
    res.json(403).json({
      msg: "Bad Input",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  if (req.query.kidneyId != 1 && req.query.kidneyId != 2) {
    res.status(403).json({
      msg: "Bad input",
    });
  } else {
    next();
  }
}

app.use(express.json());
app.use(calculateRequests);

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

app.post("/login", (req, res) => {
  // must be registered
});

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  //   console.log("entered");
  res.json({
    msg: "Healthy person",
  });
});

app.get("/", (req, res) => {
  console.log("abc");
  res.json({
    msg: "running server",
  });
});

app.post("/health-checkup", (req, res) => {
  const kidney = req.body.kidneys;
  //   const response = schema.safeParse(kidney);
  //   res.send(response);
  if (!kidney) {
    res.status(403).json({
      msg: "bad input",
    });
  }
  res.send("kidney length is " + kidney.length);
});

//global catches
// app.use(function (err, res, res, next) {
//   res.json({
//     msg: "ftgyaaaa",
//   });
// });

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// const resp = fetch("https://www.google.com");
// resp.then((res) => res.json());
