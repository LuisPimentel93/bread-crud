
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
  // res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
   const {arrayIndex} = req.params 
  res.render('show', {
      bread: Bread[arrayIndex]
    })
  })
  

module.exports = breads
