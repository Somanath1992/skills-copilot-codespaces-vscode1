// Create web server
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Read the file and pipe it to the response
    fs.createReadStream(__dirname + '/index.html').pipe(res);
});

server.listen(3000, '