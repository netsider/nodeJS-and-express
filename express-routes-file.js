var express = require('express');
var routes = require('./routes');
var port = 3000;
var app = express();
app.set('view engine', 'ejs');
app.locals.titleofthewebsite = 'Website TITLE';
app.get('/', routes.russ);

app.get('*', function(req, res) {
	res.send('Bad route');
});
app.listen(port, function() {
	console.log('Listening on Port ' + port);
});