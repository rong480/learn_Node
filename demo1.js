// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('hello world');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// 用控制器输出hello world!
// console.log('Hello world!');

// function say(word) {
//    console.log(word);
// }

// function execute(someFunction, value) {
//    someFunction(value);
// }

// execute(say, "Hello");

function execute(someFunction, value) {
   someFunction(value);
}
execute(function(word){ console.log(word) }, "Hello");