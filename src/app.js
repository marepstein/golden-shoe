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

import Womens from './components/Womens'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import Returns from './components/Returns'
import ThankYou from './components/Thankyou'

const App = props => {
  const [userInfo, setUserInfo] = useState(null)
  const sharedInfo = useMemo(() => ({ userInfo, setUserInfo }), [
    userInfo,
    setUserInfo
  ])

  useEffect(() => {
    console.log('running')
    if (Auth.isAuthorized()) {
      console.log('setting user')
      axios
        .get('/api/profile', {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
        .then(response => {
          setUserInfo(response.data.user)
        })
        .catch(error => {
          console.log(error)
          setUserInfo(null)
          Auth.logout()
          props.history.push('/login')
        })
    } else return
  }, [])

  return (
    <BrowserRouter>
      <UserContext.Provider value={sharedInfo}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/womens/:id" component={SingleProduct} />
          <Route exact path="/womens" component={Womens} />
          <Route exact path="/returns" component={Returns} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/thanks" component={ThankYou} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
