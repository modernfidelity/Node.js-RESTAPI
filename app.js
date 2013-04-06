
/**
 *
 *  RESTify API SERVER v.1.0
 *
 *	The following sets up a Restify HTTPS server to create a webservice for the Data API...
 *
 *  Author : @modernfidelity
 *
 */ 


var API_VERSION = '1.0.0';

// INCLUDE MODULES
var restify = require('restify');

// RESTify SERVER SETUP
var server = restify.createServer({
	name: 'Modernfidelity API',
	//certificate: '/etc/apache2/ssl/apache.crt',
  	//key: '/etc/apache2/ssl/apache.key',

});

// ADD ROUTING (CALLBACKS)
require('./routes')(server);

// START REST API SERVER
server.listen(1935, function() {
  console.log('%s listening at %s', server.name, server.url);
});

















