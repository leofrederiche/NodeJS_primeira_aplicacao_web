var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hello World</h1>');
    response.end();
});

server.listen(3000, 'localhost', function(){
    console.log('Servidor de pé! localhost:3000');
});