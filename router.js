const express = require('express')
const handler = require('./handler')
const router = express.Router()

router.get('/index', (req,res) => {
  handler.showIndex(req,res)
})
router.get('/submit', (req,res) => {
  handler.showSubmit(req,res)
})
router.get('/details', (req,res) => {
  handler.showDetails(req,res)
})
router.get('/add', (req,res) => {
  handler.addGet(req,res)
})


module.exports = router