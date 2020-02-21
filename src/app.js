import React, { useState, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import UserContext from './components/UserContext'

const App = (props) => {

  const [userInfo, setUserInfo] = useState(null)
  const sharedInfo = useMemo(() => ({ userInfo, setUserInfo }), [userInfo, setUserInfo])

  return <BrowserRouter>
    <UserContext.Provider value={sharedInfo}>
      {/* <Navbar /> */}
      <Switch>

      </Switch>
    </UserContext.Provider>
  </BrowserRouter>

}

ReactDOM.render(<App />,
  document.getElementById('root'))


