
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);

const io = require('socket.io')(http);

app.use(express.static(__dirname + '/frontend'));

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(4000, function(){
  console.log('listening on port 4000');
});