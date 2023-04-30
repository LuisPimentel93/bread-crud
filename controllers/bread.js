// const router = require('express').Router()
// const Bread = require('../models/bread')


// router.get('/', (req, res) =>{
//     res.render('index')
// })

// router.get('/:index', (req, res) =>{
//     const { index } = res.params
//     res.send(Bread[index])
// })

// module.exports = router
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  

module.exports = breads
