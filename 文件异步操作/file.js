var fs = require("fs");

function readFile(error,data){

	if( error ){
		console.error(error);
	}

	if( data ){

		console.log(data);

	}

}

fs.readFile("index.txt1","utf-8",readFile);

console.log("read files");