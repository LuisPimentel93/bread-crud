// const express = require('express')
// require('dotenv').config()
// const breadController = require('./controllers/bread')

// const app = express()

// // MIDDLEWARE
// app.set('views', __dirname + '/views')
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())


// app.use('/breads', breadController)

// // const PORT = process.env.PORT

// app.listen(8080)

// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const breadsController = require('./controllers/bread.js')
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  
  app.use('/breads', breadsController)
  
// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
