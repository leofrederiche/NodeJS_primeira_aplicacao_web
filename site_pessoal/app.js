var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    /* __dirname = diretorio raiz */
    response.writeHeader(200, {'Content-Type':'text/html'});

    fs.readFile(__dirname + '/index.html', function(error, html){
        if (error){
            response.write('<p>' + error + '</p>');
        }
        else{
            response.write(html);
        }
    });

    response.end;
});

server.listen(3000, function(){
    console.log('Site pessoal rodando --> localhost:3000');
});