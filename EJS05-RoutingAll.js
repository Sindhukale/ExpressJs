var myexpress=require("express");
var app=myexpress();
var port = 9000;
app.get("/",(req,res)=>{
    res.send("Hello world from ExpressJS");
});
app.get("/home",(req,res)=>{
    res.send("Display from home page:")
});
app.get("/contact",(req,res)=>{
    res.send("Display from contact page:")
});
app.get("/about",(req,res)=>{
    res.send("Display from about page:")
});
app.listen(port,()=>{
    console.log("Running port number 9000");
});