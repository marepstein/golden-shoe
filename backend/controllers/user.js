
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')


function register(req, res, next) {
  User
    .create(req.body)
    .then(user => res.status(200).json({ message: `Hi ${user.username}! Let's shop!` })) 
    .catch(next)
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '2h' }) // NB: sub = the payload (which contains any data that we want to store in the token)
      res.status(202).json({ message: `Welcome Back ${user.username}`, user, token })
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }))
}

function show(req, res) {
  User
    .findById(req.currentUser)
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'There\'s a problem with this user...' })
      }
      res.status(200).json({ user })
    })
    .catch(() => {
      res.status(401).json({ message: 'Profile Not Found' })
    })
}


function edit (req, res) {
  User 
    .findById(req.currentUser)
    .then(user => {
      if (!user) return res.status(401).json({ message: 'There\'s a problem with your credentials' })
      return user.set(req.body)
    })
    .then(user => user.save())
    .then(user => res.status(202).json({ user }))
    .catch(() => res.status(401).json({ message: 'Profile Not Found' }))
}

// function isAuth (req, res, next) {
	
//   // const user = req.profile && req.profile._id === req.auth._id
//   User 
//     .findById(req.currentUser)
//     .then(user => {
//       if (!user || user._id && user.profile !== req.profile) {
//         return res.status(401).json({ message: 'Access Denied' })
//       }
//       next()
//     })
// }

// function isAdmin (req, res, next) {
//   User
//     .findById(req.currentUser)
//     .then(user => {
//       if (user.profile.role === 0) {
//         return res.status(403).json({ message: 'Unauthorized - Admin resource!' })
//       }
//     })
//   next()
// }

// exports.userById = (req, res) => {
//   User
//     .findById(req.currentUser)
//     .then(user => {
//       if (!user) {
//         return res.status(401).json({ message: 'There\'s a problem with your credentials...' })
//       }
//       res.status(200).json({ user })
//     })
//     .catch(() => {
//       res.status(401).json({ message: 'Profile Not Found' })
//     })
// }

module.exports = {
  register,
  login,
  show,
  edit
}






// exports.userById = (req, res, next, id) => {
//   User
//     .findById(id)
//     .then(user => {
//       if (!user) {
//         return res.status(401).json({ message: 'There\'s a problem with your credentials...' })
//       }
//       res.status(200).json({ user })
//       req.profile = user
//       next() 
//     })
//     .catch(err => console.log(err))
// }

