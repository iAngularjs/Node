var querystring = require('querystring');

var str = 'uname=yang&age=28';

var post = querystring.parse(str);

console.log(post);