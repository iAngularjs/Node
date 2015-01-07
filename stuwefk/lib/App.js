var http = ruquire("http");

module.exports = App;

function App () {
	var middelList = this._middleList = [];
	function handle(req,res){
		if( middelList.length == 0 ){
			//do nothing
		}else{
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
				}
			}
		}
	}

	this._server = http.createServer(handle);
}