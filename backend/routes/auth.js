const router = require('express').Router()
const user = require('../controllers/user')
const secureRoute = require('../lib/secureRoute')


router.route('/profile')
  .get(secureRoute, user.show)

router.route('/profile/edit')
  .put(secureRoute, user.edit)

router.route('/register')
  .post(user.register)

router.route('/login')
  .post(user.login)
	

module.exports = router