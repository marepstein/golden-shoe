import React, { useState } from 'react'
import axios from 'axios'

const formInitialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: ''
}

const errorInitialState = {
  errors: ''
}

const Register = props => {
  const [form, updateForm] = useState(formInitialState)
  const [error, setError] = useState(errorInitialState)

  function handleInput(e) {
    updateForm({ ...form, [e.target.name]: e.target.value })
    setError({ ...error, errors: '' })
    console.log(form)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form) return
    axios
      .post('/api/register', form, { headers: { Authorization: '' } })
      .then(() => {
        if (error.errors === '') {
          props.history.push('/login')
        }
      })
      .catch(err => {
        setError({ errors: err.response.data })
        console.log(error)
        console.log(form)
      })
  }

  return (
    <section className="section" id="register-pg">
      <div className="container has-text-centered">
        <div className="title is-size-2-mobile" style={{ fontSize: 100 }}>
          Register
        </div>
        <form className="form" onSubmit={e => handleSubmit(e)}>
          <div className="field">
            <label htmlFor="" className="label">
              Username
            </label>
            <div className="control">
              <input
                onChange={e => handleInput(e)}
                type="text"
                name="username"
                className="input"
              />
            </div>
            {error.errors.username && (
              <small className="help is-danger">{error.errors.username}</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Email
            </label>
            <div className="control">
              <input
                onChange={e => handleInput(e)}
                type="text"
                name="email"
                className="input"
              />
            </div>
            {error.errors.email && (
              <small className="help is-danger">{error.errors.email}</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Password
            </label>
            <div className="control">
              <input
                onChange={e => handleInput(e)}
                type="password"
                name="password"
                className="input"
              />
            </div>
            {error.errors.password && (
              <small className="help is-danger">{error.errors.password}</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Password Confirmation
            </label>
            <div className="control">
              <input
                onChange={e => handleInput(e)}
                type="password"
                name="passwordConfirmation"
                className="input"
              />
            </div>
            {error.errors && form.passwordConfirmation !== form.password && (
              <small className="help is-danger">
                {error.errors.passwordConfirmation}
              </small>
            )}
          </div>
          <button className="button is-black">Complete Registration</button>
        </form>
      </div>
    </section>
  )
}

export default Register
