var mosca = require('mosca');

var settings = {
		port:process.env.MQTT_USER
		}


var server = new mosca.Server(settings);

server.on('ready', function(){
console.log("ready");
});
