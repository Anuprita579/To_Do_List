import express from "express"
import bodyParser from "body-parser"

import dotenv  from "dotenv"
dotenv.config()

var app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

var items = [];
var example="working";
app.get("/", function(req, res){
    res.render("list", {ejes : items});
});

app.post("/", function(req, res){
    var item = req.body.l1;
    items.push(item);
    res.redirect("/");
});

app.listen(process.env.PORT, function(){
    console.log("Server started.");
});