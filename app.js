
/**
 *
 *  RESTify API SERVER v.1.0
 *
 *	The following sets up a Restify HTTPS server to create a webservice for the Data API...
 *
 *  Author : @modernfidelity
 *
 */ 


var restify = require('restify');

var server = restify.createServer({
	
	name: 'Modernfidelity API',
	
	//certificate: '/etc/apache2/ssl/apache.crt',
  	//key: '/etc/apache2/ssl/apache.key',

});


function respond(req, res, next) {
  res.send('hello ' + req.params.name);
}

function sendV1(req, res, next) {
  res.send('hello: ' + req.params.name);
  return next();
}

function sendV2(req, res, next) {
  res.send({hello: req.params.name});
  return next();
}

var PATH = '/hello/:name';

server.get({path: PATH, version: '1.0.0'}, sendV1);
server.get({path: PATH, version: '2.0.0'}, sendV2);

server.listen(1935, function() {
  console.log('%s listening at %s', server.name, server.url);
});

















