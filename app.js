var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var models = require("./models")

models.sequelize.sync({force: true}).then(function() {
	console.log("TABELLEN ERSTELLT!")

	app.set("view engine", "ejs");
	app.set("views", __dirname + "/views");

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use("/public", express.static("public"));

	app.get("/", function(req, res) {
		res.render("pages/landing")
	});

	app.post("/create", function(req, res) {
		models.Url.create({
			url: req.body.url,
			desc: req.body.desc
		})
		console.log(req.body)
		res.redirect("/created");
	});

	app.get("/created", function(req, res) {
		 res.end("Erfolgreich.");
	});

	app.listen(8080, function() {
		 console.log("Webserver wurde auf Port 8080 getsartet.");
	});
});