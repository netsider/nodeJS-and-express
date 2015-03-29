var express = require('express');
var app = express();

app.set('view engine', 'ejs');
//app.get('/', function(req, res) { // root route
//	res.send('Hello Express');
//});
//app.get('/', function(req, res) { // root route
//	res.render('default');
//});
// app.get('/', function(req, res) { // root route
	// res.render('default', {title: 'Russ'});
// });
app.get('/', function(req, res) { // root route
	res.render('default', {
		title: 'Russ',
		users: ['Russell', 'Damien', 'Melissa']
		});
});
app.get('/russ', function(req, res) {
	res.send('Hello Express');
});
app.get('/testvar/:name?', function(req, res) {
	var name = req.params.name;
	res.send(name);
});
app.get('/testvar/:name?/:title?', function(req, res) {
	var name = req.params.name;
	var title = req.params.title;
	res.send(name + title);
});
app.get('*', function(req, res) {
	res.send('Bad route');
});
app.listen(3000, function() {
	console.log('Listening on Port');
});