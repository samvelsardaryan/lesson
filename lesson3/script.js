const exp = require("constants");
var express = require("express");
var os = require("os");
var message = "The platform is ";
var app = express();

app.use(express.static('lesson3'));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");
});
app.get("/google", function(req, res){
    res.redirect('http://google.com');
 });
 app.get("/search", function(req, res){
    res.redirect('https://google.com/search?q=searchvalue');
 });
 app.get("/*", function(req, res){
    res.status(404).send('Sorry, we cannot find that!');
 });
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});