var http = require("http"),
	url = require('url');

module.exports = App;

function App () {

	var self = this;

	/*this._getHandle = null;
	this._postHandle = null;*/

	this._route_post_handles = {}; //最新修改

	this._route_get_handles = {}; //最新修改

	var middleList = this._middleList = [];

	function handle(req,res){

		var middleIndex = 0;
		execMiddle();

		function next(){
			middleIndex += 1;
			execMiddle();
		}

		function execMiddle(){

			var middle = middleList[middleIndex];

			if(middle){

				middle(req,res,next);

			}else{

				var handle;
				var path = url.parse(req.url).path;

				switch(req.method){

					case "GET":

						handle = self._route_get_handles[path];

					break;

					case "POST":

						handle = self._route_post_handles[path];

					break;
				}

				if( handle ){
					handle(req,res);
				}

			}
		}

	}

	this._server = http.createServer(handle);
}

App.prototype.use = function(middle){
	this._middleList.push(middle);
}

App.prototype.listen = function(){
	this._server.listen.apply(this._server,arguments);
}

App.prototype.get = function(route,handleGet){
	this._route_get_handles[route] = handleGet;
}

App.prototype.post = function(route,handlePost){
	this._route_post_handles[route] = handlePost;
}