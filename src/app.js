import React, { useState, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import '../src/style.scss'

import UserContext from './components/UserContext'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = (props) => {

  const [userInfo, setUserInfo] = useState(null)
  const sharedInfo = useMemo(() => ({ userInfo, setUserInfo }), [userInfo, setUserInfo])

  return <BrowserRouter>
    <UserContext.Provider value={sharedInfo}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </UserContext.Provider>
  </BrowserRouter>

}

ReactDOM.render(<App />,
  document.getElementById('root'))


