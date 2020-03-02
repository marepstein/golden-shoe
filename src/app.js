import React, { useState, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import 'bulma'
import '../src/style.scss'

import UserContext from './components/UserContext'
import Auth from './lib/auth'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import Returns from './components/Returns'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG')

const App = (props) => {

  const [userInfo, setUserInfo] = useState(null)
  const sharedInfo = useMemo(() => ({ userInfo, setUserInfo }), [userInfo, setUserInfo])
	
  useEffect(() => {
    console.log('running')
    // console.log(Auth.getToken())
    if (Auth.isAuthorized()) {
      console.log('setting user')
      axios.get('/api/profile', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
        .then(response => {
          setUserInfo(response.data.user)
          // console.log(response.data)
        })
        .catch(error => {
          console.log(error)
          setUserInfo(null)
          Auth.logout()
          props.history.push('/login')
        })
    } else return
    // .then(console.log(data))
  }, [])


  return <BrowserRouter>
    <UserContext.Provider value={sharedInfo}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/womens/:id" component={SingleProduct} />
        <Route exact path="/womens" component={Products} />
        <Route exact path="/returns" component={Returns} />
        <Elements stripe={stripePromise}>
          <Route exact path="/cart" component={Cart} />
        </Elements>
      </Switch>
      <Footer />
    </UserContext.Provider>
  </BrowserRouter>

}

ReactDOM.render(<App />,
  document.getElementById('root'))


