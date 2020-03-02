const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
  //user info --------------
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 0, required: true },
  //---------------------------------
  //user additions ------------------
  favourites: { type: [Object] }, 
  orderHistory: { type: [Object], default: [] }
  // shippingAdresses: { type: [Object] }, 
  // billingAdresses: { type: [Object] }, 
  // billingDetails: { type: [Object] }, 
  // cart: { type: [Object] }
  //---------------------------------
}, {
  timestamps: true,
  toJSON: {
    transform(doc, json) {
      delete json.password
      delete json.__v
      return json
    }
  }
})

//This is the mongoose specific check to make sure each user is unique

userSchema.plugin(require('mongoose-unique-validator'))

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })


userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema) 