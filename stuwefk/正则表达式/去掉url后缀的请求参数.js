var  url = '/about?name=yang&age=22';

function pathRegexp(path){

    var regexp = /\?(.*)/;

    return path.replace(regexp,"");

}

var regexp = pathRegexp(url);

console.log(regexp);