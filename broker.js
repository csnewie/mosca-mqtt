require 'uri'
var mosca = require('mosca');

uri = URI.parse ENV['CLOUDMQTT_URL'] || 'mqtt://localhost:1883'

var settings = {
		port:uri.port
		}


var server = new mosca.Server(settings);

server.on('ready', function(){
console.log("ready");
});
