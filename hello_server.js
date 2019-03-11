var http = require('http');

const home_page     = '<h1>Hello World</h1>';
const welcome_page  = '<h1>Welcome</h1>';
const page_404      = '<h1 style="color:red">Ops, Error 404</h1>';

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});

    if (request.url == '/'){
        response.write(home_page);
    }
    else if (request.url == '/welcome'){
        response.write(welcome_page);
    }
    else{
        response.write(page_404);
    }

    response.end;
});

server.listen(3000, 'localhost', function(){
    console.log('Servidor de pé! => localhost:3000');
});