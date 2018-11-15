// ----------------------- demo1
// var http = require("http");

// http.createServer(function(request, response) {
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write("Hello World");
//    response.end();
// }).listen(8888);

// var server = http.createServer();
// server.listen(8888);

// ----------------------- demo2
// var http = require("http");
//
// function onRequest (request,response) {
// 	console.log('recieved request');
// 	response.writeHead(200,{'Content-Type':'text-plain'});
// 	response.write("hello");
// 	response.end();
// }
//
// http.createServer(onRequest).listen(8888);
//
// console.log('server is starting!');

// ----------------------- demo3 将server.js变成一个模块
// var http = require("http");
//
// function start() {
//   function onRequest (request,response) {
// 		console.log('recieved request');
// 		response.writeHead(200,{'Content-Type':'text-plain'});
// 		response.write("hello 123");
// 		response.end();
// 	}
//
// 	http.createServer(onRequest).listen(8888);
//   console.log('server is starting!');
// }
//
// exports.start = start;

// ----------------------- demo4 处理请求的url路径
var http = require("http");
var url = require("url");

function start (route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('pathname:' + pathname);

		route(pathname);

		response.writeHead(200, {'Content-Type':'text/plain'});
		response.write('hello 333');
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log('server has started');
}

exports.start = start;