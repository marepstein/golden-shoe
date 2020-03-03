const port = 8000
const dbURIPrefix = 'mongodb://localhost/'
const dbName = 'golden-shoe'
const dbURI = `${dbURIPrefix}${dbName}`

// secret used for encoding JWT tokens, used in '/controllers/user' and '/lib/secureRoute'
const secret = 'e-commerce platform'
module.exports = {
  port,
  dbURI,
  secret
}
