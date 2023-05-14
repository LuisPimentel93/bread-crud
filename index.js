

// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const methodOverride = require('method-override')
const PORT = process.env.PORT
const breadsController = require('./controllers/bread.js')
const bakerController = require('./controllers/baker.js')
const { mongoose } = require('mongoose')
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true}))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use('/breads', breadsController)
app.use('/baker', bakerController)

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  
  

  // db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('DB connected'))
.catch(err => console.error(err));
  
// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
