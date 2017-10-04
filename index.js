var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");

	fs.readFile('./index.html', 'utf-8', function(err, data) {
	    if (request.method === 'GET' && request.url === '/site') {
	        response.write(data);
	        response.end();
	    } 

	    else {
	    	response.setHeader("Content-Type", "image/jpeg");
	    	fs.readFile('./banner.png', function(err, data) {	
	            response.statusCode = 404;
	            response.write(data);
	            response.end();
	    	});
		}
	});
});


server.listen(9000);



        















       









