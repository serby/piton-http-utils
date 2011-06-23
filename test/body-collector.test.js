var
	httpUtils = require('../../piton-http-utils'),
	assert = require('assert');

module.exports = {
	'success': function() {

		var http = require('http');
		var server = http.createServer(function (req, res) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Hello World\n');
		});
		server.listen(1337, 'localhost');

		var options = {
			host: 'localhost',
			port: 1337,
			path: '/',
			method: 'GET'
		};

		var req = http.request(options, function(res) {
			res.setEncoding('utf8');
			httpUtils.collectBody(res, function(data) {
				assert.equal('Hello World\n', data);
				server.close();
			});
		});
		req.end();
	}
};
