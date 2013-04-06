/**
 * 
 * ARTICLE.JS
 *
 * Handler and route for article resource 
 *
 */ 


function getArticle(req, res, next) {

  res.send('article: ' + req.params.aid);
  return next();

}



module.exports = function(server){

    server.get({path: '/article/:aid', version: '1.0.0'}, getArticle);

}


