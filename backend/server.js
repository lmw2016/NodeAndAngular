var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose=require('mongoose')
var app = express();

var post = [
  { message: "hello" },
  { message: "hiworld" },
  { message: "Andrew boy" }
];

app.use(cors());
app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  res.send(post);
});

app.post("/register", (req, res) => {
   var userData=req.body;
   console.log(userData.email)
   res.sendStatus(200)
});

mongoose.connect('')

app.listen(3000);
