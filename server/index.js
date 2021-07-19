const express = require('express')
const app = express()
 
app.get('/registration', function (req, res) {
  console.log("sending Hello")
  res.send('Hello')
})
 
app.listen(3000)