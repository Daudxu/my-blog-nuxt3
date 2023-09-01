var http = require('http');
const express = require('express');
const app = express();
var server = http.createServer(app);
server.listen(8081);

var WebSocketServer = require('ws').Server
var io = require('socket.io').listen(server);

io.set('destroy upgrade', false);
io.set('transports', ['websocket']);

io.sockets.on('connection', function (socket) {
    var wss = new WebSocketServer({
        server: server,
        path: '/anythingYouWant/' + socket.id
    });
    wss.on('connection', function(ws) {
        ws.on('message', function(message) {
            console.log(message);
        });
    });
});