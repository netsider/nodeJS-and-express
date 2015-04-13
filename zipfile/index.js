	var AdmZip = require('adm-zip');

	// reading archives
	var zip = new AdmZip("./zipfile.zip");
	var zipEntries = zip.getEntries(); // an array of ZipEntry records
    zipEntries.forEach(function(zipEntry) {
        console.log(zipEntry.toString()); // outputs zip entries information
        if (zipEntry.entryName == "my_file.txt") {
             console.log(zipEntry.data.toString('utf8')); 
        }
    });
    // outputs the content of some_folder/my_file.txt
    console.log(zip.readAsText("output.txt")); 
    // extracts the specified file to the specified location
    zip.extractEntryTo(/*entry name*/"New Text Document.txt", /*target path*/"./home/", /*maintainEntryPath*/false, /*overwrite*/true);
    // extracts everything
    //zip.extractAllTo(/*target path*/"./home/", /*overwrite*/true);
    // creating archives
    var zip = new AdmZip();
    // add file directly
    //zip.addFile("test.txt", new Buffer("inner content of the file"), "entry comment goes here");
    // add local file
    zip.addLocalFile("./test.bmp");
    // get everything as a buffer
    var willSendthis = zip.toBuffer();
    // or write everything to disk
    //zip.writeZip(/*target file name*/"./newfile.zip");