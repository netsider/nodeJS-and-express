var express = require('express');
var app = express();
// var data = require('data.json');
// app.locals.appdata = data; // loads file into app.locals
app.locals.appdata = require('./data.json'); // app.locals is an object, and whenever an element is added, it also becomes an object (data.json) (Why are the "." and "/" required?)

app.set('view engine', 'ejs'); // **By default, express looks for a "views" folder for .ejs templates
app.get('/', function(req, res) { // root route
	res.render('default'); // renders/outputs default.EJS
});
app.get('*', function(req, res) {
	res.send('Bad route');
});
app.listen(3000, function() {
	console.log('Listening on Port');
});