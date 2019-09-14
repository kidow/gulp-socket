const socket = io('/')

function sendMessage(message) {
  socket.emit('newMessage', { message })
  console.log('you: ', message)
}

function setNickname(nickname) {
  socket.emit('setNickname', { nickname })
}

function handleMessageNotif({ message, nickname }) {
  console.log(`${nickname}: ${message}`)
}

socket.on('messageNotif', handleMessageNotif)
