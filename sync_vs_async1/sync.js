var fs = require('fs');

for (var i = 1; i <= 5; i++){
    var file = 'sync-txt' + i + '.txt';
    fs.writeFileSync(file, 'Hello NodeJS!');
    console.log('Sync ' + i);
};