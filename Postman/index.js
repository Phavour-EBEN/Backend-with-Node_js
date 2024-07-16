import express from "express";
const app = express();
const port = 1000;

app
   .get("/",(req,res)=>{
     res.send("<h1>HOME PAGE</h1>");

   })
   .post("/register",(req,res)=>{
    res.sendStatus(201)
   })
   .put("/user/Eben",(res,req)=>{
    res.sendStatus(200)
   })
   .patch("/user/Eben",(res,req)=>{
    
    res.sendStatus(200)
   })


app.listen(port, (req,res)=>{
    console.log(`Server is running on port ${port}`);
})

