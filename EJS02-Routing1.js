var myexpress=require("express");
var app=myexpress();
var port = 6000;
app.get("/",(req,res)=>{
    res.send("Hello world from ExpressJS");
});
app.get("/about",(req,res)=>{
    res.send("Display from About page:")
});
app.listen(port,()=>{
    console.log("Running port number 6000");
})