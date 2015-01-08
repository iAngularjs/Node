var App = require('../../').App,
    app = new App();

    app.get('/about',function(req,res){
        res.write('my name is leo');
        res.end();
    });

    app.get('/contact',function(req,res){
        res.write("contact me ...");
        res.end();
    });

    app.listen(8080);