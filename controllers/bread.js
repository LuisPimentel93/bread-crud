
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',{          
        breads: Bread,
        title: "Index Pages"
      }
    )
 
})

breads.get('/new',(req, res) =>{
  res.render('new')
})

breads.post('/', (req, res) =>{
  if (!req.body.image) req.body.image = 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'
  if(req.body.hasGluten === 'on'){
      req.body.hasGluten = true
  }else {
    req.body.hasGluten = false
  }

  Bread.push(req.body)
  res.redirect('/breads')
    
})



breads.get('/', (req, res) => {
  res.render('Index',{          
      breads: Bread,
      title: "Index Pages"
    }
  )

})


// SHOW
breads.get('/:arrayIndex', (req, res) => {
   const {arrayIndex} = req.params 
  res.render('show', {
      bread: Bread[arrayIndex]
    })
  })
  
  breads.post('/', (req, res) =>{

  })


module.exports = breads
