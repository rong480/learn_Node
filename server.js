var http = require("http");

// http.createServer(function(request, response) {
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write("Hello World");
//    response.end();
// }).listen(8888);

// var server = http.createServer();
// server.listen(8888);

function onRequest (request,response) {
	console.log('111');
	response.writeHead(200,{'Content-Type':'text-plain'});
	response.write("hello");
	response.end();
}

http.createServer(onRequest).listen(8888);

console.log('222');