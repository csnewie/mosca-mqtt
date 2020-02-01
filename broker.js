var mosca = require('mosca');

var settings = {
		port:process.env.PORT
		}


var server = new mosca.Server(settings);

server.on('ready', function(){
console.log("ready");
});
