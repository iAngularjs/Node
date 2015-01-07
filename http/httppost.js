var http = require("http");

var querystring = require("querystring");

var contents = querystring.stringify({
	name:'byvoid',
	email:'byviod@byvoid.com'
});

var options = {

	host:'http://v2.vet.boqii.com',
	path:'/mobileApi',
	method:'post',
	Act:'GetMyOrderList',
	AppVersion:'1.4',
	CityId:'31',
	StartIndex:0,
	Number:10,
	OrderType:3,
	UserId:'xs6od6dVVk4uCmsu2jwVspCE9j0uSD92w/wQxO2W576PDqPkyqnCRznD2fvWTzFQ',
	UDID:'ffffffff-abfa-e477-f447-5fe50033c587'
};

var req = http.request(options,function(res){

	res.setEncoding('utf-8');
	res.on('data',function(data){
		console.log(data);
	})

});

req.write(contents);
req.end();