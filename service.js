var http = require("http");
http.createServer(function(request,response){
	
	response.writeHead("200",{"content-type":"text/plain"});
	response.end("hellow node");
}).listen(2222);

console.log("start server");
