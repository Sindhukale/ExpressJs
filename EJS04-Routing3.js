var myexpress=require("express");
var app=myexpress();
var port = 1000;
app.get("/",(req,res)=>{
    res.send("Hello world from ExpressJS");
});
app.get("/home",(req,res)=>{
    res.send("Display from contact page:")
});
app.listen(port,()=>{
    console.log("Running port number 1000");
});