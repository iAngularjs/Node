var utils = require("util"),
    EventEmitter = require("events").EventEmitter;

function Server(){
    console.log("init..");
}

utils.inherits(Server,EventEmitter);

var server = new Server();
var s = new Server();

server.on("abc",function(){
    console.log("trigger abc event");
});

server.emit("abc");

