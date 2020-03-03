const router = require('express').Router()
const secureRoute = require('./lib/secureRoute')
const products = require('./controllers/Products')
const users = require('./controllers/user')

router.route('/products').get(products.index)

router.route('/products/purchase').patch(products.purchaseProducts)

router.route('/products/:id').get(products.show)

router.route('/profile').get(secureRoute, users.show)

router.route('/profile/edit').put(secureRoute, users.edit)

router.route('/register').post(users.register)

router.route('/login').post(users.login)

module.exports = router
