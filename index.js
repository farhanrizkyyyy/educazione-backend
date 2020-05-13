const express = require('express')

const app = express()

app.get('/', (request, response) => {
  const data = {
    success: true,
    msg: 'success'
  }
  response.send(data)
})

const users = require('./src/routes/users')
app.use('/users', users)

app.get('*', (request, response) => {
  const data = {
    success: false,
    msg: 'not found'
  }
  response.status(404).send(data)
})

app.listen(8080, () => {
  console.log('running 8080')
})
