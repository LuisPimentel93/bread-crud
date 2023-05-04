
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
      bread: Bread[arrayIndex],
      arrayIndex: arrayIndex
    })
  })
  
  breads.post('/', (req, res) =>{

  })


  // Delete

  breads.delete('/:arrayIndex', (req, res) => {
    const {arrayIndex} = req.params
    Bread.splice(arrayIndex, 1)
    res.status(303).redirect('/breads')

  })

module.exports = breads
