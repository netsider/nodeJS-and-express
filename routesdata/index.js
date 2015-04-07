var express = require('express');
var router = express.Router();
var appdata = require('../data.json'); // Must be included since appdata from parent file isn't accessible anymore.
var Names = [];
var nameObject = [{
    "name" : 'Russell',
    "img" : "russell.jpg",
    "url" : "http://www.facebook.com/russell"
  },{
    "name" : 'Damien',
    "img" : 'damien.jpg',
    "url" : 'http://www.facebook.com/damien'
  },{
    "name" : 'Melissa',
    "img" : "melissa.jpg",
    "url" : "http://www.facebook.com/melissa"
  }];
appdata.speakers.forEach(function(item){
	// Names = Names.concat(item.name);
	Names.push(item.name); // same thing, but shorter
});
router.get('/', function(req, res) {
	res.render('default-bootstrap', {
		title: 'Russ',
		classname: 'school',
		social: nameObject,
		users: Names
		});
});
// router.get('/russ', function(req, res) {
	// /* // res.send('Hello Russ'); */
	// res.send("The views directory is " + req.app.get("views"));
// });
// router.get('/ru*s', function(req, res) { // Matches "russssssss"
  // res.send('Hello Russ!!!');
// });
router.get('/russ/:russid', function(req, res) { // How to pass string to the page
	 res.send(req.params.russid);
});
module.exports = router;  // Makes router available to other script? (.use?)