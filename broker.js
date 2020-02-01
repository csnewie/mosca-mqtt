var mosca = require('mosca');

var settings = {
		port:process.env.MQTT_USER || process.env.YOUR_PORT || process.env.PORT || 80;
		}


var server = new mosca.Server(settings);

server.on('ready', function(){
console.log("ready");
});
