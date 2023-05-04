

// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const methodOverride = require('method-override')
const PORT = process.env.PORT
const breadsController = require('./controllers/bread.js')
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true}))
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
