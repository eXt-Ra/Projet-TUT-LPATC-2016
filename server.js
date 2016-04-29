var express = require('express');
var app = express();


app.use(express.static('public'));
console.log("serveur running");

var server = app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

var socket = require('socket.io');
var io = socket(server);

io.on('connection', function(socket) {
  console.log('a user connected' + socket.id);
  socket.on('disconnect', function() {
    console.log('Got disconnect!');
  });

  socket.on('newcon', function(data) {
    console.log(data);
    socket.broadcast.emit('newconS',data);
  });
});
