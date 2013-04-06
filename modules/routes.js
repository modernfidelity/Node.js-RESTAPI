/**
 * ROUTES.JS
 *
 * Loads all 'modules' within the specific folder, which include their respective routes and callbacks
 *
 */


var fs = require('fs');

module.exports = function(server) {

  fs.readdirSync(__dirname + '/modules/').forEach(function(name) {
  
    var route = require('./modules/' + name);
    route(server);
  
  });

}
