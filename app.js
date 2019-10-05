var port = process.env.VCAP_APP_PORT || 8080; //Express Web Framework, and create a new express server
var express = require('express'),
	app = express();

var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: false
}));


var index = require('./routes'),
	sentiment = require('./routes/sentiment'); 
app.use('/', index); 
app.use('/sentiment', sentiment)
app.listen(port);
