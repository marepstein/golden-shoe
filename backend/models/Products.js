const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }, 
  image: { type: [String] },
  rating: { type: String, required: true }
}, {
  timestamps: true
})

const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  productCode: { type: String, required: true }, 
  image: { type: String, required: true },
  colours: { type: [String], required: true }, 
  size: { type: String, required: true },
  status: { type: String, required: true },
  productDescription: { type: String, required: true },
  category: { type: [String], required: true },
  price: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  reviews: [ reviewSchema ] 
})

productSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Product', productSchema)