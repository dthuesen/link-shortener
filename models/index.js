var Sequelize = require('sequelize');
//var sequelize = new Sequelize('database', 'username', 'password') {
var sequelize = new Sequelize(null, null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  // SQLite only
  storage: __dirname + "/../db/database.sqlite"
});

var Url = sequelize.define('url', {
	url: {
		type: Sequelize.STRING,
		field: "url"
	},
	desc: {
		type: Sequelize.STRING,
		field: "desc"
	}
});

// Hiermit wird der Inhalt dieses Moduls außerhalb verfügbar.
// 'sequelize' + 'Url' sind per 'require' in anderen Dateien zugänglich.
module.exports = {
	sequelize: sequelize,
	Url: Url
}

// Dieser Code macht den Datenbankzugriff async, weil er
// top-down abgearbeitet wird. Jedoch wartet Express nicht
// darauf, dass die Einträge fertig sind...
/*Url.sync({force: true}).then(function() {
	console.log("Tabelle wurde erstellt.");

	Url.create({
		url: "http://google.de",
		desc: "Eine Suchmaschine."
	})
});*/