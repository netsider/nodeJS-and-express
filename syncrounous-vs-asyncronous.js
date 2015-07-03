var fs = require('fs');

var contents = fs.readFileSync('package.json').toString(); // puts entire file contents in variable
console.log(contents);

fs.readFile('package.json', function (err, buf) {
	console.log(buf.toString());
});