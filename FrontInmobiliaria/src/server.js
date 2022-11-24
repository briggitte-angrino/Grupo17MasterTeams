const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('/dist/front-inmobiliaria'));
app.get('/*',(req,res)=>{
    res.sendFile('index.html',{root:'dist/front-inmobiliaria/'})
});
app.listen(process.emv.PORT||4200);