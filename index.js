// const express = require('express').Router()
// require('dotenv').config()
// const POST = process.env.PORT
// const app = express()
// const breadRouter = require('./controllers/bread.js')



// router.get('/breads', breadController)



// app.listen(PORT)

// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
