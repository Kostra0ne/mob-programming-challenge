console.log("Hello world!");

require('dotenv').config();
const dataBase = require("./config/mongo.js");

const express = require("express");
const hbs = require("hbs");
const app = express();
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials"); 


const users = [{
    name: "John",
    email: "john@john.com",
    favoriteLangage: "French"

}]

const images = ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg"]



app.listen(process.env.PORT, () => {
  console.log(
    "hey hey hey ready to code & http://localhost:" + process.env.PORT
  );
});