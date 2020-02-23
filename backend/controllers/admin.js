// const Product = require('../models/Products')
// const User = require('../models/User')

// function show(req, res) {
//   User
//     .find()
//     .populate('user')
//     .then(users => res.status(200).json(users))
//     .catch(err => console.log(err))
// }

// function createProduct(req, res, next) {
//   req.body.user = req.currentUser
//   Product
//     .create(req.body)
//     .then(product => res.status(201).json(product))
//     .catch(err => console.log(err))
//     .catch(next)
// }

// function updateProduct(req, res) {
//   Product
//     .findById(req.params.id)
//     .then(product => {
//       if (!product) return res.status(404).json({ message: '404 Not found' })
//       if (!req.currentUser._id.equals(product.user)) return res.status(401).json({ message: 'Unauthorized' })
//       return product.set(req.body)
//     })
//     .then(product => product.save())
//     .then(product => res.status(202).json(product))
// }

// function deleteProduct(req, res) {
//   Product
//     .findById(req.params.id)
//     .then(product => {
//       if (!product) return res.status(404).json({ message: 'Not Found' })
//       return product.remove()
//     })
//     .then(() => res.status(200).json({ message: 'product deleted' }))
//     .catch(err => console.log(err))
// }

// module.exports = {
//   show,
//   createProduct,
//   updateProduct, 
//   deleteProduct
// }