var fs = require('fs');
var md5 = require('md5');
var count = 1;
var Dirs = [];
var fileNames = [];
var results = [];
var DIR = 'C:/xampp/htdocs';
var SEP = ':';
var printToScreen = false;
var currmd5;
// var printToScreen = true;
var walk = function(dir, done) {
	fs.readdir(dir, function(err, list) {
		if (err) return done(err);
		var i = 0;
		(function next() {
			var file = list[i++];
			if (!file) return done(null, results);
			filename = file;
			file = dir + '/' + file;
			fs.stat(file, function(err, stat) {
				if (stat && stat.isDirectory()) { // If item is a directory
				if(printToScreen){
					fs.readFile(file, function(err, buf) {
						currmd5 = md5(buf);
						//console.log(currmd5);
						if(err){ console.log(err) };
					});
					process.stdout.write(count + '.' + filename + ' (MD5: ' + currmd5 + ') ' + '\r'); //  print and number each directory
					count++;
				}
				Dirs.push(filename);
				walk(file, function(err, res) {
					// results = results.concat(res); // No idea (?)
					next();
				});
        } else { // if item is a file
			results.push(file);
			fileNames.push(filename);
			if(!printToScreen){
			var currmd5 = md5(file);
						fs.readFile(file, function(err, buf) {
						//console.log(currmd5);
						});
				//process.stdout.write(count + '.' + filename + '\r'); //  print and number each file
				process.stdout.write(count + '.' + filename + ' (MD5: ' + currmd5 + ') ' + '\r'); //  print and number each directory
				count++;
			}
			next();
        }
      });
    })();
  });
};
var doneFunction = function(err, list){
	if(err){
		console.log('Error:' + err);
	}else{
		console.log('Complete!');
	}
	if(list){
		console.log('Number of files in ' + DIR + SEP + ' ' + fileNames.length);
		console.log('Number of directories in ' + DIR + SEP + ' ' + Dirs.length);
	}
};
walk(DIR, doneFunction);