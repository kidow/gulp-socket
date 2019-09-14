const socket = io('/')

socket.on('hello', () => console.log('Somebody joined'))

setTimeout(() => socket.emit('helloGuys'), 1000)
