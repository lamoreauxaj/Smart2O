const express = require('express')
const path = require('path')
const config = require('./config.js')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/index.html'))
})

app.use(express.static('public'))

app.listen(config.port, () => console.log(`Listening on port ${config.port}!`))
