
var fs = require('fs');

module.exports = function(server) {
  fs.readdirSync(__dirname + '/modules/').forEach(function(name) {
    var route = require('./modules/' + name);
    route(server);
  });
}
