var express = require('express');
var app = module.exports = express();

app.set('views', __dirname + '/views');

app.get('/', function (req, res){

	var ipAddress;
	var forwardedIpsStr = req.header('x-forwarded-for');
	if (forwardedIpsStr) {
		var forwardedIps = forwardedIpsStr.split(',');
		ipAddress = forwardedIps[0];
	}
	if (!ipAddress) {
		ipAddress = req.connection.remoteAddress;
	}

	res.render('index',{
		title: 'Prueba de Dokku',
		ip: ipAddress
	});
});
