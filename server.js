var port = 8080;
var sys = require("sys"),  
my_http = require("http");  
my_http.createServer(function(request,response){  
    sys.puts("I got kicked");  
    response.writeHeader(200, {"Content-Type": "text/plain"});  
    response.write("Hello World"); 
	response.writeHeader(200, {"Content-Type": "text/html"});
	response.write("<strong>Hello World</strong>");  	
    response.end();  
}).listen(port);  
sys.puts("Server Running on port: " + port);