const app = require('../backend/app')

const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

var expect = require('chai').expect

it('succeeds silently!', function() {
  chai
    .request('http://localhost:8000')
    .get('/api/products')
    .end(function(err, res) {
      expect(res).to.have.status(200)
    })
})

it('gets product by ID!', function() {
  chai
    .request('http://localhost:8000')
    .get('/api/products/:id')
    .end(function(err, res) {
      expect(res).to.have.status(200)
    })
})

it('gets product by productCode!', function() {
  chai
    .request('http://localhost:8000')
    .get('/api/products/productCode')
    .end(function(err, res) {
      expect(res).to.have.status(200)
    })
})

it('registers user!', function() {
  chai
    .request('http://localhost:8000')
    .post('/api/register')
    .send({
      username: 'hello123',
      email: 'hello123@email',
      password: 'hi123',
      passwordConfirmation: 'hi123'
    })
    .then(function(res) {
      expect(res).to.have.status(200)
    })
    .catch(function(err) {
      throw err
    })
})
