var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
	version: '2018-11-16',
	iam_apikey: '{api-key(confidential}',
	url: '{url-(confidential)}'
});

const MISSING_URL_ERROR = 'URL not passed';

exports.extractSentiment = function(req, callback) {

	if (req === null || req.body === null || req.body.text === null) {
		callback(MISSING_URL_ERROR, null);
		return;
	}
	//	var text = req.body.text;
	var parameters = {
		'url': req.body.url,
		'features': {
			'sentiment': {
				'targets': [
					req.body.target
				]
			}
		}
	};

	naturalLanguageUnderstanding.analyze(parameters, function(err, response) {
		if (err)
			callback(err, null);
		else
			callback(null, response);
	});


};
