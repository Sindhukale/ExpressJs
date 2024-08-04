const express=require('express');
const app=express();
const port=2000;
app.get('/user/:id',(req,res)=>{
    res.send(`User ID: ${req.params.id}`);
});
app.listen(port,()=>{
    console.log('Server running at 2000:sin');
});