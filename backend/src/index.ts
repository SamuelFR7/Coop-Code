import express from 'express'
import { createServer } from 'http'

const app = express()
const server = createServer(app)

app.use(express.static('public'))

server.listen(8000, () => {
  console.log('> Server is listening on port 8000')
})
