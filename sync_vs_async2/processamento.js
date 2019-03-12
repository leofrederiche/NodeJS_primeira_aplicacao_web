var http = require('http');
var fs = require('fs');
var leituraAsync = require('./leitura_async');
var leituraSync = require('./leitura_sync');

var arquivo = './node-v11.11.0.pkg';
var stream = fs.createWriteStream(arquivo);
var download = 'http://nodejs.org/dist/latest/node-v11.11.0.pkg';

http.get(download, function(res){
    console.log('Fazendo download do arquivo');

    res.on('data', function(data){
        stream.write(data);
    });

    res.on('end', function(){
        stream.end();
        console.log('Download Finalizado');
        leituraAsync(arquivo);
        leituraSync(arquivo);
        
    });
});