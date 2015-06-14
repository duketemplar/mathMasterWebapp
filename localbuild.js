var pkg = require('./package.json');
var exec = require('child_process').exec;
var cmd = 'cd dist && mkdir sc && ln -s .. sc/'+pkg.name+' && cd ..';
//console.log(cmd);
exec(cmd);
