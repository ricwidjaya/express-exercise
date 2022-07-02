const express = require('express')
const router = express.Router()

const indexControllers = require('../controllers/index-controllers')

router.get('/', indexControllers.getIndex)
router.get('/about', indexControllers.getAbout)
router.get('/portfolio', indexControllers.getProtfolio)
router.get('/contact', indexControllers.getContact)

module.exports = router