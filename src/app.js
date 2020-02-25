import React, { useState, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import '../src/style.scss'

import UserContext from './components/UserContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Register from './components/Register'

import Products from './components/Products'

const App = (props) => {

  const [userInfo, setUserInfo] = useState(null)
  const sharedInfo = useMemo(() => ({ userInfo, setUserInfo }), [userInfo, setUserInfo])

  return <BrowserRouter>
    <UserContext.Provider value={sharedInfo}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/womens" component={Products} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <Footer />
    </UserContext.Provider>
  </BrowserRouter>

}

ReactDOM.render(<App />,
  document.getElementById('root'))


