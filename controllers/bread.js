
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
breads.get('/:id/edit',  async (req, res) => {
  const { id } = req.params 
  const bread = await Bread.findById(id)
  res.render('edit',{
    bread
    
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
    bread: Bread,
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
breads.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Bread.findByIdAndDelete(id)
  res.status(303).redirect('/breads')

})

breads.put('/:id', async (req, res) => {
  const { id } = req.params
  if (!req.body.image) req.body.image = undefined
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  }else {
    req.body.hasGluten = false
  }
  await Bread.findByIdAndUpdate(id, req.body)
  res.status(303).redirect(`/breads/${id}`)
})

module.exports = breads
