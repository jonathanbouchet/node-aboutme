var express = require("express");
var app = express();
app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("home");
});

//INDEX ROUTE
app.get("/about",function(req, res){
	res.render("about");
});

app.listen(process.env.PORT, process.env.IP);

