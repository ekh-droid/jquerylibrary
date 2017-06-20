var express = require('express');
var app = express();
var http = require('http').Server(app)


//express functions
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res){
	res.sendFile(__dirname + '/index.html');
});

//node function
http.listen(3000,function(){
		console.log('listening of port 3000');
});s