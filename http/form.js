var http = require("http"),
	querystring = require("querystring");

http.createServer(function(req,res){

	var post = '';

	req.on('data',function(chunk){
		post += chunk;
		console.log("chunk:"+chunk);
	});

	req.on('end',function(){

		post = querystring.parse(post);
		res.write(post.uname);
		res.write(post.content);
		res.end();

	});

	console.log("start....");
}).listen(3000);

