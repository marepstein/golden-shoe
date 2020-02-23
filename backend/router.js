const router = require('express').Router()
const users = require('./controllers/users')
const secureRoute = require('./lib/secureRoute')
const products = require('./controllers/Products')
const cart = require('./controllers/Cart')
// const admin = require('./controllers/admin')


router.route('/products')
  .get(products.index)
  // .post(secureRoute, products.create)
	
router.route('/products/:id')
  .get(products.show)
  // .put(secureRoute, products.update)
  // .delete(secureRoute, products.remove)
	
// router.route('/products')
//   .post(admin.createProduct)

// router.route('/products/:id')
//   .put(admin.updateProduct)
//   .delete(admin.deleteProduct)

router.route('/profile')
  .get(secureRoute, users.show)

// router.route('/user-data')
//   .get(users.readUserData)
	
router.route('/user-data/cart')
  .post(users.addToCart)

router.route('/user-data/cart/:id')
  .delete(users.removeFromCart)

router.route('/profile/edit')
  .put(secureRoute, users.edit)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)
	

// Gets the admin users

// router.route('/users')
//   .get(admin.show)

module.exports = router


