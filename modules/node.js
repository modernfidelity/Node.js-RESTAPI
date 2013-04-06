/**
 * 
 * NODE.JS
 *
 * Handler and route for node resources
 *
 */ 


function getNode(req, res, next) {

  res.send('node: ' + req.params.nid);
  return next();

}


module.exports = function(server){

    server.get({path: '/node/:nid', version: '1.0.0'}, getNode);

}


