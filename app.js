console.log("Hello world!");

require("dotenv").config();
const dataBase = require("./config/mongo.js");
const users = [
  {
    name: "John",
    email: "john@john.com",
    favoriteLangage: "French",
  },
];

const images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];

const express = require("express");
const hbs = require("hbs");
const app = express();
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("home", {
    images,
  });
});
app.get("/my-dev-squad", (req, res) => {
  res.render("allUsers", {
    users,
  });
});
app.get("/add-new-ironhacker", (req, res) => {
  res.render("formUser", {});
});

function displayUser() {
  for (let i = 0; i < users.length; i++) {
    return users[i].length;
  }
}
displayUser();

app.listen(process.env.PORT, () => {
  console.log(
    "hey hey hey ready to code & http://localhost:" + process.env.PORT
  );
});
