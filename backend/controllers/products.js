const ObjectID = require('mongodb').ObjectID
const Product = require('../models/Products')

function index(req, res) {
  Product.find()
    .populate('user')
    .then(products => res.status(200).json(products))
    .catch(err => console.log(err))
}

function show(req, res) {
  Product.find({ productCode: req.params.id })
    .then(product => {
      console.log('My product is', product.name)
      if (!product) res.status(404).json({ message: '404 Not found' })
      else res.status(200).json(product)
    })
    .catch(err => console.log(err))
}

function productById(req, res, next) {
  Product.findById(req.params.id)
    .then(product => {
      if (!product)
        return res.status(400).json({ message: 'Product not found' })
      else res.status(200).json(product)
      next()
    })
    .catch(err => console.log(err))
}

function purchaseProducts(req, res) {
  // Creating an array of the product Id's
  var documentIds = req.body.products.map(function(product) {
    return ObjectID(product._id)
  })

  Product.updateMany(
    // The $in operator selects the documents where the value of a field equals any value in the specified array
    { _id: { $in: documentIds } },
    { $set: { status: 'sold' } }
  ).then(() => {
    Product.find({ _id: { $in: documentIds } }).then(products => {
      console.log(products.map(product => product.status))
      res.json(products)
    })
  })
}

module.exports = {
  index,
  show,
  productById,
  purchaseProducts
}
