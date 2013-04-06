/**
 * 
 * USERS.JS
 *
 */ 



server.get({path: '/user/:id', version: '1.0.0'}, sendV1);
//server.get({path: PATH, version: '2.0.0'}, sendV2);



function respondUsers(req, res, next) {
  res.send('users ' + req.params.name);
}