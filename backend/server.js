var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var jwt=require("jwt-simple")
var app = express();
var bcrypt=require('bcrypt-nodejs')

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
  var users = await User.find({}, "-pwd -__v");
  res.send(users);
});

app.get("/profile/:id", async (req, res) => {
  try {
    var user = await User.findById(req.params.id, "-pwd -__v");
    res.send(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post("/register", (req, res) => {
  var user = new User(req.body);
  //console.log(userData.email)
  user.save((err, result) => {
    if (err) {
      console.log("saving user error");
      res.status(501).send({err});
    }
    res.status(200).send({message:`register success for user: ${user.name +" "+ user.email} !`});
  });
});

app.post("/login", async (req, res) => {
  var loginData = req.body;
  //console.log(userData.email)
  var user=await User.findOne({email:loginData.email})

  if(!user) return res.status(401).send({message:"Email or password invalid"})

  bcrypt.compare(loginData.pwd,user.pwd,(err,isMatch)=>{
       if (!isMatch) return res.status(401).send({message:"Email or password invalid"})

       var payload={}

        var token=jwt.encode(payload,'123')

        //console.log(token);

        res.status(200).send({token});
  })

});

mongoose.connect(
  "mongodb://localhost/pssocial",
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) console.log("connected to mongo");
  }
);

app.listen(3000);
