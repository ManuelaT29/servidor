const express = require('express')
const app = express()

require('dotenv').config()
console.log(process.env.PORT)


app.get('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy Get')
})
app.post('/api/v1/viernes', function (req, res) {
    res.send('Hola mundo soy Post')
})
app.put('/api/v1/viernes', function (req, res) {
    res.send('Hola mundo soy Put')
})
app.delete('/api/v1/viernes', function (req, res) {
    res.send('Hola mundo soy Delete')
})

app.listen(process.env.PORT, function (){
    console.log(`Servidor encendido en puerto ${process.env.PORT}`)
})