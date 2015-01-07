var utils = require("util");

function Person(){
	this.name = "yang";
	this.test = function(){
		return this.name;
	}
}

var person = new Person();

console.log( person );
console.log( utils.inspect(person,true,true) );