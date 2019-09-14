import express from 'express'
import { join } from 'path'
import socketIO from 'socket.io'
import logger from 'morgan'

const PORT = 4000
const app = express()

app.set('view engine', 'pug')
app.set('views', join(__dirname, 'views'))
app.use(logger('dev'))
app.use(express.static(join(__dirname, 'static')))
app.get('/', (req, res) => res.render('home'))

const server = app.listen(PORT, () => {
  console.log('App listening on port 4000!')
})

const io = socketIO.listen(server)

io.on('connection', socket => {
  socket.on('newMessage', ctx => {
    console.log('ctx: ', ctx)
    socket.broadcast.emit('messageNotif', {
      message: ctx.message,
      nickname: socket.nickname || 'Anon'
    })
  })
  socket.on('setNickname', ctx => {
    console.log('ctx2: ', ctx)
    socket.nickname = ctx.nickname
  })
})
