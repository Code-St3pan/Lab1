const http = require('http');
const myModule = require("./MyModule");

const server = http.createServer(function(req, res)
{
    const _myModule = new myModule.MyModule("Stepan");
    res.write(_myModule.getMessage());
    res.end();
}
)

server.listen(4000);