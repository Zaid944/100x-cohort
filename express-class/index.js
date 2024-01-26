const express = require("express");
var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];
const app = express();
app.get("/", (req, res) => {
    const numberOfKidneys = kidneys.length
    // number of healthy kidneys
});
app.get("/", (req, res) => {});
app.get("/", (req, res) => {});
app.get("/", (req, res) => {});
app.listen(3000, () => {
  console.log("yayayay");
});
