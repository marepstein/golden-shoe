const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const cors = require('cors')
const { dbURI, port } = require('./config/environment')
const errorHandler = require('./lib/errorHandler')

// const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const productsRouter = require('./routes/products')
const router = require('./router')


// Connecting to mongoose
mongoose.connect(dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('Mongo is connected'))

// Express server
const app = express()

// Middleware
app.use(bodyParser.json())
// app.use(cors())

app.use((req, resp, next) => {
  console.log(`${req.method} to ${req.url}`)
  next()
})

app.use('/api', userRouter)
app.use('/api', productsRouter)

app.use(errorHandler)

app.use('/*', (req, res) => res.status(404).json({ message: 'Not Found' }))

// Port Listening
app.listen(port, () => console.log(`We are good to go on port ${port}`))

module.exports = app