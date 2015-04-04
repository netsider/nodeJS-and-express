var express = require('express');
var routes = require('./routesdata'); // Point it to routes folder
var util = require('util');
var app = express();
var port = 3000;
var appdata = require('./data.json');
app.locals.titleofthewebsite = 'Website TITLE';
app.set('view engine', 'ejs');
app.use('/', routes); // use the routes file/path specified above for the root dir/node (?)
app.get('*', function(req, res) { // if URL/route !exist
	res.send('Bad route');
	//console.log("Bad Route: " + util.inspect(req, {showHidden: false, depth: null}));
	console.log("Bad Route: " + util.inspect(req, false, null)); // Logs bad request to console
});
app.listen(port, function() {
	console.log('Listening on Port ' + port);
	console.log('Mountpath: ' + app.mountpath);
});