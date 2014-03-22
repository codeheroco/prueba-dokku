var express = require('express'),
    http    = require('http'),
    path    = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(app.router);

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

var main = require('./controllers/main');
app.use(main);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Servidor Express escuchando en el puerto ' + app.get('port'));
});
