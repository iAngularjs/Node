var http = require("http");

var server = http.createServer();

function handleReq(req,res){
    res.writeHead("200",{"content-type":"text/plain"});

    res.end("end request");
}

server.on("request",handleReq);

server.listen(3000);