const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.static("public"));
app.get("/",function(req,res){
    res.send("Hello world");
});

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
});
