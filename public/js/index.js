var socket = io();

socket.on('connect', function () {
  console.log('Connected to Server');
});

socket.on('newMessage',function(message) {
  console.log('message', message);
});

socket.on('disconnect', function() {
  console.log('Disconnected from Server');
});
