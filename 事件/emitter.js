var utils = require("util");
var EventEmitter = require("events").EventEmitter;

var events = new EventEmitter();

events.on("self_event",function(){

	console.log('event called');

});

setTimeout(function(){

	events.emit("self_event");

},1000);