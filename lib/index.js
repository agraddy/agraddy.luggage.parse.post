var form = require('agraddy.luggage.parse.form');
var multipart = require('agraddy.luggage.parse.multipart');

var mod = function(req, res, lug, cb) {
	if(req.headers['content-type'].indexOf('application/x-www-form-urlencoded') !== -1) {
		form.luggage(req, res, lug, cb);
	} else if(req.headers['content-type'].indexOf('multipart/form-data') !== -1) {
		multipart.luggage(req, res, lug, cb);
	} else {
		cb();
	}
}

module.exports = mod;
