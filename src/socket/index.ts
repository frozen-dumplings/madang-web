import io from 'socket.io-client';

const socket = io();

socket.on('connect', () => {
  console.log('Connected with server!');
});

socket.on('server-hello', () => {
  console.log('Server sent hello!');
  socket.emit('client-hello');
});

export default socket;
