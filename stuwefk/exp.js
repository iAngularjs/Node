/*
 var arr1 = arr2 = [];

 arr2[0] = "yang";

 console.log(arr1);*/

var http = require('http');

http.createServer(function(req,res){

  console.log(req.url);

  res.writeHead(200);

  res.end('end process');

}).listen(8);