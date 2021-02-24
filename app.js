// CALL ENV
const env = require("dotenv").config();
const database = require("./config/mongodb.js");

// CALL HBS + EXPRESS
const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

const users = [{
    name:"Mathieu", 
    email: "mathieu@coucou.lesami.es",
    favoriteLanguage: "Not English apparently"
},
{
    name:"Toto", 
    email: "toto@coucou.lesami.es",
    favoriteLanguage: "Not JS apparently"
},
{
    name:"Myriam", 
    email: "myriam@coucou.lesami.es",
    favoriteLanguage: "Not MongoDB apparently"
}
];

const images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];

console.log("Hello best team ♥");

//ROUTES
app.get("/", (req,res)=>{
    res.render("home"),
    {images} 
});
app.get("/my-dev-squad", (req, res)=>{
    res.render("allUsers"),
    {users}
});
app.get("/add-new-ironhacker", (req, res)=>{
    res.render("formUser")
});
app.get("*", (req, res)=>{
    res.send("Sorry not found")
});

//app.get("/api/ironhackers", (req, res)=>{
//  res.json("users")
//});


app.listen(process.env.PORT, () => {
    console.log("Ready @ http://localhost:" + process.env.PORT);
})