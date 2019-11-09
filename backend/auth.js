var jwt=require("jwt-simple")
var bcrypt=require('bcrypt-nodejs')
var User = require("./models/user.js");

module.exports={
    register:(req, res) => {
        var user = new User(req.body);
        //console.log(userData.email)
        user.save((err, result) => {
          if (err) {
            console.log("saving user error");
            res.status(501).send({err});
          }
          res.status(200).send({message:`register success for user: ${user.name +" "+ user.email} !`});
        });
      },

    login:async (req, res) => {
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
      
      }
}