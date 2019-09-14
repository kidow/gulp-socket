import express from 'express'
import { join } from 'path'
import socketIO from 'socket.io'
import logger from 'morgan'
import socketController from './socketController'
import events from './events'

const PORT = 4000
const app = express()

app.set('view engine', 'pug')
app.set('views', join(__dirname, 'views'))
app.use(logger('dev'))
app.use(express.static(join(__dirname, 'static')))
app.get('/', (req, res) =>
  res.render('home', { events: JSON.stringify(events) })
)

const server = app.listen(PORT, () => {
  console.log('App listening on port 4000!')
})

const io = socketIO.listen(server)

io.on('connection', socket => socketController(socket))
