const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/User')
const Product = require('../models/Products')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },  // removes depreciation warnings
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([{
          username: 'Admin', 
          email: 'admin@email', 
          password: 'admin', 
          passwordConfirmation: 'admin', 
          role: '1'
        }])
      })
      .then(users => {
        console.log(`${'👍'.repeat(users.length)} users created`)
        return Product.create([
          {
            name: 'Nude Sandal Chunky Heels', 
            productCode: '001122A',
            image: 'https://cdn.shopify.com/s/files/1/2475/8088/products/11227599_hi_968x.jpg?v=1563145785',
            colour: 'Nude', 
            size: '5', 
            quantity: 22,
            // status: 'available',
            productDescription: 'A pair of nude heels perfect for everyday wear. Upper Material: Leather, Lining: Leather, Fastening: Buckle Fastening, Heel Height: 10cm/3.9", Size: True to fit',
            category: ['Womens', 'Heels'], 
            price: '£65.00', 
            user: users[0]
          },
          {
            name: 'Nude Sandal Chunky Heels', 
            productCode: '001122A',
            image: 'https://cdn.shopify.com/s/files/1/2475/8088/products/11227599_hi_968x.jpg?v=1563145785',
            colour: 'Nude', 
            size: '4', 
            quantity: 15,
            productDescription: 'A pair of nude heels perfect for everyday wear. Upper Material: Leather, Lining: Leather, Fastening: Buckle Fastening, Heel Height: 10cm/3.9", Size: True to fit',
            category: ['Womens', 'Heels'], 
            price: '£65.00', 
            user: users[0]
          },
          {
            name: 'White Basic Trainers', 
            productCode: '001122B',
            image: 'https://www.footasylum.com/images/products/productlistings/076464.jpg',
            colour: 'White', 
            size: '3', 
            quantity: 10,
            productDescription: 'Upper Material: Leather, Lining: Leather, Fastening: Laced, Size: True to fit',
            category: ['Womens', 'Trainers'], 
            price: '£45.00', 
            user: users[0]
          },	
          {
            name: 'White Basic Trainers', 
            productCode: '001122B',
            image: 'https://www.footasylum.com/images/products/productlistings/076464.jpg',
            colour: 'White', 
            size: '4', 
            quantity: 8,
            productDescription: 'Upper Material: Leather, Lining: Leather, Fastening: Laced, Size: True to fit',
            category: ['Womens', 'Trainers'], 
            price: '£45.00', 
            user: users[0]
          },
          {
            name: 'White Basic Trainers', 
            productCode: '001122B',
            image: 'https://www.footasylum.com/images/products/productlistings/076464.jpg',
            colour: 'White', 
            size: '5', 
            quantity: 25,
            productDescription: 'Upper Material: Leather, Lining: Leather, Fastening: Laced, Size: True to fit',
            category: ['Womens', 'Trainers'], 
            price: '£45.00', 
            user: users[0]
          },
          {
            name: 'Mens Black and White Trainers', 
            productCode: '001133A',
            image: 'https://d2ob0iztsaxy5v.cloudfront.net/product/340051/3400517270_main.jpg',
            colour: 'Black', 
            size: '8', 
            quantity: 20,
            productDescription: 'Upper Material: Canvas, Lining: Leather, Fastening: Laced, Size: True to fit',
            category: ['Mens', 'Trainers'], 
            price: '£65.00', 
            user: users[0]
          },
          {
            name: 'Mens Black and White Trainers', 
            productCode: '001133A',
            image: 'https://d2ob0iztsaxy5v.cloudfront.net/product/340051/3400517270_main.jpg',
            colour: 'Black', 
            size: '9', 
            quantity: 29,
            productDescription: 'Upper Material: Canvas, Lining: Leather, Fastening: Laced, Size: True to fit',
            category: ['Mens', 'Trainers'], 
            price: '£65.00', 
            user: users[0]
          },
          {
            name: 'Mens Black and White Trainers', 
            productCode: '001133A',
            image: 'https://d2ob0iztsaxy5v.cloudfront.net/product/340051/3400517270_main.jpg',
            colour: 'Black', 
            size: '10', 
            quantity: 10,
            productDescription: 'Upper Material: Canvas, Lining: Leather, Fastening: Laced, Size: True to fit',
            category: ['Mens', 'Trainers'], 
            price: '£65.00', 
            user: users[0]
          }
        ])
      })
      .then(products => console.log(`${products.length} Products created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)