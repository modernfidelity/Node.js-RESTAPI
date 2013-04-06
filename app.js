
/**
 *
 *  RESTify API SERVER v.1.0
 *
 *	The following sets up a Restify HTTPS server to create a webservice for the Data API...
 *
 *  Author : @modernfidelity
 *
 */ 

// INCLUDE MODULES
var restify = require('restify');
	//user = require('user')
	

// RESTify SERVER SETUP
var server = restify.createServer({
	name: 'Modernfidelity API',
	//certificate: '/etc/apache2/ssl/apache.crt',
  	//key: '/etc/apache2/ssl/apache.key',

});

// API GET CALLBACKS
function respond(req, res, next) {
  res.send('hello ' + req.params.name);
}

function sendV1(req, res, next) {
  res.send('hello: ' + req.params.name);
  return next();
}

function getArticle(req, res, next) {
  res.send('article: ' + req.params.aid);
  return next();
}

function getNode(req, res, next) {
  res.send('node: ' + req.params.nid);
  return next();
}

function getUser(req, res, next) {
  res.send('user: ' + req.params.uid);
  return next();
}


var API_VERSION = '1.0.0';

//@TODO : how best to seperate Req Routes ? 

// API GET REQUESTS 
server.get({path: '/hello/:name', version: API_VERSION}, sendV1);
//server.get({path: PATH, version: '2.0.0'}, sendV2);
server.get({path: '/article/:aid', version: API_VERSION}, getArticle);
server.get({path: '/node/:nid', version: API_VERSION}, getNode);
server.get({path: '/user/:uid', version: API_VERSION}, getUser);


// START REST API SERVER
server.listen(1935, function() {
  console.log('%s listening at %s', server.name, server.url);
});

















