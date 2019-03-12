var http = require('http');
var url = require('url');
var fs = require('fs'); 

const routes = function(path){
    var view_path = __dirname + '/views/';

    switch (path){
        case '/': 
            return view_path + 'artigos.html';
            break;
        case '/artigos':
            return view_path + 'artigos.html';
            break;
        case '/contato':
            return view_path + 'contato.html';
            break;
        default:
            return view_path + 'erro.html'
    };
};

var server = http.createServer(function(request, response){
    var current_url = url.parse(request.url).pathname;
    var request_file = routes(current_url);

    fs.readFile(request_file, function(error, html){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(html);
    });
});

server.listen(3000, function(){
    console.log('Servidor rodando');
});