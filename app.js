let http = require('http');
let router = require('./router');
const port = 8123,
    localhost = '127.0.0.1';

http.createServer((req, res) => {
    router.home(req, res);
    router.time(req, res);
}).listen(port, localhost, () => {
    console.log(`Sever is running http://${localhost}:${port}`);
});