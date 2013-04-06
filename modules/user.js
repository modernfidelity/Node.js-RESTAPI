/**
 * 
 * USERS.JS
 *
 * Handler and route for user resource 
 *
 */ 


function getUser(req, res, next) {

  res.send('user: ' + req.params.uid);
  return next();

}



module.exports = function(server){

    server.get({path: '/user/:uid', version: '1.0.0'}, getUser);

}


