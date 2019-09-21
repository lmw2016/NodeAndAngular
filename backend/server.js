var express=require('express')
var cors=require('cors')
var app=express()

var post=[
    {message:'hello'},
    {message:'hiworld'},
    {message:'Andrew boy'}
]

app.use(cors())

app.get('/posts',(req,res)=>{
    res.send(post)
})

app.listen(3000)