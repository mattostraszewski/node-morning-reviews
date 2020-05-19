const express = require('express')
const app = express()
const userCtrl = require('./controller/userCTRL')
const SERVER_PORT = 4500

app.use(express.json())

app.get('/api/users', userCtrl.getUsers)

app.get('/api/users/user_id', userCtrl.getUser)

app.listen(SERVER_PORT, () => {
  console.log(`Welcome to ${SERVER_PORT}!`)
})