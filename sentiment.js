var express = require('express');
var router = express.Router();

var sentimentServices = require('../services/sentimentServices');

router.post('/', function(req, res) {
	
	sentimentServices.extractSentiment(req, function(err, response) {
		if (err) res.status(500).send(err);
		
		else res.send(response);
	});
});
module.exports = router;
