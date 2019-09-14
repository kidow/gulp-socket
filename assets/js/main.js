import { handleMessageNotif } from './chat'

const socket = io('/')

function sendMessage(message) {
  socket.emit('newMessage', { message })
  console.log('you: ', message)
}

function setNickname(nickname) {
  socket.emit('setNickname', { nickname })
}

socket.on('messageNotif', handleMessageNotif)
