import express from "express";
const app = express();
const port  = 1000;

app
 .get("/",(req,res)=>{
   res.send("Hello World");
 })
 .get("/about", (req, res)=>{
    res.send("<h1>About Page</h1>");
 })
app.listen(1000,()=>{
    console.log("Server is running on port 1000");
})