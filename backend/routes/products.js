const router = require('express').Router()
const { index, show, productById } = require('../controllers/products')

router.param('productId', productById)

router.route('/products')
  .get(index)
	
router.route('/products/:id')
  .get(show)
	

module.exports = router