var fk = require('../..'),
    App = fk.App,
    app = new App(),
    static_middle = fk.static;

//加载中间件

    app.use(static_middle(__dirname+'/public'));

    app.get(function(req,res){

        res.write("im get mothod test");
        res.end();

    });

    app.post(function(req,res){

        res.write("im post method test");
        res.end();

    });

    app.listen(89);

