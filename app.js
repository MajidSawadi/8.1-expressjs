const express = require("express");
const logger = require("morgan");
require("dotenv").config();
const app =express();
const port =5000;


app.use(logger("dev"));

app.get("/", (req, res)=>{

    res.send("hello world")
});
app.get("/posts",(req , res)=>{
    res.send("posts");
    
})
app.get("/posts/:id",(req , res)=>{
res.send( "hello :" + req.params.id);
})
app.get("/users",(req , res)=>{
    res.send("users");
    
})
app.get("/users/:id/:name:/:country",(req, res)=>
{
    console.log({
        query: req.params.query,
    });
    res.send("id" + req.params.id);
})

app.get("/posts/:id/:post1/:post2", (req, res)=>{

    console.log({
        id: req.params.id,
        psot1: req.params.post1,
        post2: req.params.post2
    })
    res.send("ID :"+ req.params.id)
    



})

app.post ("/blogs", (req, res , next)=>{
console.log("creating blog")
next();
})
app.use((req, res, next) => {
    const error = new Error("Resource Not Found");
    error.statusCode = 404;
    next(error);
  });
  function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(err.statusCode || 500);
    res.send(err.message);
  }
  
  app.use(errorHandler);
  

app.listen(port,()=>{
    console.log("app is listening")
});
