// other half: ./routes/index.js
var express = require('express');
var routes = require('./routes'); // Point it to routes folder
var port = 3000;
var app = express();
app.set('view engine', 'ejs');
app.locals.titleofthewebsite = 'Website TITLE';
app.get('/', routes.russ); // gets exports.russ from routes/index.js

app.get('*', function(req, res) {
	res.send('Bad route');
});
app.listen(port, function() {
	console.log('Listening on Port ' + port);
	console.log('Mountpath: ' + app.mountpath);
});