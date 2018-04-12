var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {
  
};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
   
  var property = endpoint.replace(/^\//, '');
  
  
  if (request.method === 'POST') {
    console.log('post', endpoint); // /prop1
    console.log('post', property); // prop1
    if(globalCounter[property]===undefined){
      globalCounter[property] = 1
    } else if (globalCounter[property] < 2){
      globalCounter[property] ++  
    }

    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end();
    console.log(globalCounter);
    
  } else if (request.method === 'GET') {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end(JSON.stringify(globalCounter[property]))
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
