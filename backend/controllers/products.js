const Product = require('../models/Products')


// function create(req, res) {
//   req.body.user = req.currentUser
//   Product
//     .create(req.body)
//     .then(product => res.status(201).json(product))
//     .catch(err => console.log(err))
// }

function index(req, res) {
  Product
    .find()
    .populate('user')
    .then(products => res.status(200).json(products))
    .catch(err => console.log(err))
}

function show(req, res) {
  Product
    .findById(req.params.id)
    .then(product => {
      console.log('My product is', product.name)
      if (!product) res.status(404).json({ message: '404 Not found' })
      else res.status(200).json(product)
    })
    .catch(err => console.log(err))
}

function createReview (req, res) {
  req.body.user = req.currentUser
  Product
    .findById(req.params.id)
    .populate('reviews.user')
    .then(product => {
      if (!product) return res.status(404).json({ message: 'Not Found' })
      product.reviews.push(req.body)
      return product.save()
    })
    .then(product => res.status(201).json(product))
    .catch(() => res.status(404).json({ message: 'Not Found' }))
}

function deleteReview(req, res) {
  Product
    .findById(req.params.id)
    .populate('comments.user')
    .then(product => {
      if (!product) return res.status(404).json({ message: 'Not Found' })
      const comment = product.reviews.id(req.params.commentId)
      comment.remove()
      return product.save()
    })
    .then(product => res.status(200).json(product))
    .catch(err => res.json(err))
}


module.exports = {
  // create,
  index,
  show, 
  createReview,
  deleteReview
}