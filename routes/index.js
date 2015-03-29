//app.get('/', function(req, res) {
//	res.send('Hello Express');
//});
//app.get('/', function(req, res) {
//	res.render('default');
//});
// app.get('/', function(req, res) {
	// res.render('default', {title: 'Russ'});
// });
exports.russ = function(req, res) {
	res.render('default-bootstrap', {
		title: 'Russ',
		classname: 'school',
		users: ['Russell', 'Damien', 'Melissa']
		});
};
// /* app.get('/russ', function(req, res) {
	// res.send('Hello Express');
// });
// app.get('/testvar/:name?', function(req, res) {
	// var name = req.params.name;
	// res.send(name);
// });
// app.get('/testvar/:name?/:title?', function(req, res) {
	// var name = req.params.name;
	// var title = req.params.title;
	// res.send(name + title);
// }); */