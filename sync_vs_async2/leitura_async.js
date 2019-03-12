var fs = require('fs');

var leituraAsync = function(arquivo){
    console.log('Fazendo leitura Assincrona');
    var inicio = new Date().getTime();
    fs.readFile(arquivo, function(err, data){
        var fim = new Date().getTime();
        console.log('Bloqueio assincrono: ' + (fim - inicio) + 'ms');
    });
    
};

module.exports = leituraAsync;