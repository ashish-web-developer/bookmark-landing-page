const express = require("express");
const app = express();
const port = process.env.PORT||3000;
app.use(express.static("public"));
app.get("/",function(req,res){
    res.send("Hello world");
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
