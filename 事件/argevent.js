var utils = require("util"),
    eventEmitter = require("events").EventEmitter;

function Server(){
    console.log("init...");
}

utils.inherits(Server,eventEmitter);

var s = new Server();
s.on("abc",function(){

    //console.log(arguments.length);
    //console.log( arguments[0] );
    var args = Array.prototype.slice.call(arguments,1);

    console.log(args);
});

s.emit("abc","yang","28","tomcat");
