var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();

var User = require("./models/user.js");
var Post = require("./models/post.js");
var auth=require("./auth.js")
var jwt=require('jwt-simple')

app.use(cors());
app.use(bodyParser.json());

function checkAuthenticated(req,res,next){
  if(!req.header('Authentication'))
    return res.status(401).send({message:'invalid authentication'});

  var token=req.header('Authentication').split(' ')[1];

  var payload=jwt.decode(token,'123');

  if(!payload)
   return res.status(401).send({message:'invalid token'});

  req.userId=payload.sub;
  next()
}

app.get("/posts/:id", async (req, res) => {
  try {
    var author=req.params.id;
    var posts=await Post.find({author},"-__v")
    res.send(posts);
  }
  catch(error){
     res.status(500).send({message:'did not find any posts!'})
  }
});

app.post('/post', checkAuthenticated, (req,res)=>{
  var postData=req.body;
  postData.author=req.userId; //'5dc7049d69e6ea597cd056d6'; //'5dbdc28db64a6e4210faf35b'
   var post=new Post(postData);
   post.save((err, result) => {
    if (err) {
      console.error("saving post error");
      return res.status(501).send({message:'save post error'});
    }
    
    res.status(200).send({message:`post '${post.msg}' is created successfully !`})
  });
})

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

mongoose.connect(
  "mongodb://localhost/pssocial",
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) console.log("connected to mongo");
  }
);

app.use('/auth', auth)
app.listen(3000);
