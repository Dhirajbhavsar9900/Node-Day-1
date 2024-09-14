require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello Worldasdd!')
})

app.get('/Ig', (req, res) => {
    res.send('Dhiraj.Bhawsar_')
})
app.get('/login', (req , res) =>{
  res.send("<h1> Backend With Dhiraj </h1>")
})

app.get('/link' ,(req , res) =>{
  res.send(`<span>Www.google.com</span>`)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})