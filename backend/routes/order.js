const router = require('express').Router()

const User = require('../models/User')
const isAuth = require('../lib/secureRoute')
const { decreaseQuantity } = require('../controllers/products')

router.route('/')
  .post(decreaseQuantity)
