var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();

var User = require("./models/user.js");

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

app.get("/users", async (req, res) => {
  var users=await User.find({},'-pwd -__v');
  res.send(users);
});

app.post("/register", (req, res) => {
  var user = new User(req.body);
  //console.log(userData.email)
  user.save((err, result) => {
    if (err) {
      console.log("saving user error");
    }
    res.sendStatus(200);
  });
    
});

mongoose.connect("mongodb://localhost/pssocial", {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
  if(!err)
  console.log('connected to mongo')
});

app.listen(3000);
