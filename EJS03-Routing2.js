var myexpress=require("express");
var app=myexpress();
var port = 2000;
app.get("/",(req,res)=>{
    res.send("Hello world from ExpressJS");
});
app.get("/contact",(req,res)=>{
    res.send("Display from contact page:")
});
app.listen(port,()=>{
    console.log("Running port number 2000");
});