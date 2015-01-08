var url = require('url'),
    str = 'http://localhost:3000/mult?a=3&b=4';

var urlPath = url.parse(str,true);

console.log(urlPath.query.b);