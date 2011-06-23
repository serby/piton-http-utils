/*!
 * Paul Serby <paul.serby@clock.co.uk>
 *
 * New BSD Licensed
 *
 * Thursday 23 June 2011
 */

/**
 * Get the whole http response body.
 *
 * @param {Object} req HTTP response object
 * @param {Function} callback Called once all the http response body is collected
 */
module.exports = function(req, callback) {
	var data = '';
	req.on('data', function(chunk) {
		data += chunk;
	});
	req.on('end', function() {
		callback(data);
	});
};
