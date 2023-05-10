
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', async (req, res) => {
  const bread = await Bread.find()
  res.render('Index',{          
    breads: bread,
    title: "Index Pages"
  })

})

// edit 
breads.get('/:arrayIndex/edit', (req, res) => {
  const { arrayIndex } = req.params 
  res.render('edit',{
    bread: Bread[arrayIndex],
    arrayIndex: arrayIndex
  })
})

breads.get('/new',(req, res) => {
  res.render('new')
})

breads.post('/', async (req, res) => {
  if (!req.body.image) req.body.image = undefined
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  }else {
    req.body.hasGluten = false
  }

  await Bread.create(req.body)
  res.redirect('/breads')
})



breads.get('/', (req, res) => {
  res.render('Index',{          
    breads: Bread,
    title: "Index Pages"
  })
})


// SHOW
breads.get('/:id', async (req, res) => {
  const { id } = req.params
  const bread = await Bread.findById(id)
  res.render('show', {
    bread
    
  })
})
    
// Delete
breads.delete('/:arrayIndex', (req, res) => {
  const {arrayIndex} = req.params
  Bread.splice(arrayIndex, 1)
  res.status(303).redirect('/breads')

})

breads.put('/:arrayIndex', (req, res) => {
  const { arrayIndex } = req.params
  // if (!req.body.image) req.body.image = 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  }else {
    req.body.hasGluten = false
  }
  Bread[arrayIndex] = req.body
  res.status(303).redirect(`/breads/${arrayIndex}`)
})

module.exports = breads
