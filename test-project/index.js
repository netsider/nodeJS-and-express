var express = require('express');
var app = express();
var data = require('data.json');

app.set('view engine', 'ejs'); // **By default, express looks for a "views" folder for .ejs templates
app.get('/', function(req, res) { // root route
	res.render('default'); // outputs default.EJS
});
app.get('*', function(req, res) {
	res.send('Bad route');
});
app.listen(3000, function() {
	console.log('Listening on Port');
});