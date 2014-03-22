var express = require('express');
var app = module.exports = express();

app.set('views', __dirname + '/views');

app.get('/', function (req, res){
	res.render('index',{
		title: 'Prueba de Dokku',
		ip: req.connection.remoteAddress
	});
});
