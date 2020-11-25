const express = require('express')
const app = express()
const ctrls = require('./controllers/messages_controllers')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))


app.post('/api/messages', ctrls.createMessage)
app.get('/api/messages', ctrls.readMessage)
app.put('/api/messages/:id', ctrls.updateMessage)
app.delete('/api/messages/:id', ctrls.deleteMessage)


app.listen(3001, () => console.log("Testing all about"))