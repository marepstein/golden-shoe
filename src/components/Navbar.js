import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/auth'
import UserContext from './UserContext'
import { itemTotal } from '../lib/helpers'

const errorInitialState = {
  error: ''
}

const Navbar = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  const [initialProductData, setInitialProductData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [error, setError] = useState(errorInitialState)

  // const [searchModal, setSearchModal] = useState(false)

  const handleMenu = () => {
    const burger = document.querySelector('.burger')
    const menuList = document.querySelector('#' + burger.dataset.target)

    burger.classList.toggle('is-active')
    menuList.classList.toggle('is-active')
  }

  function handleLogout() {
    Auth.logout()
    setUserInfo(null)
  }

  useEffect(() => {
    axios
      .get('/api/products')
      .then(resp => {
        setInitialProductData(resp.data)
        setFilteredData([...resp.data])
      })
      .then(console.log(initialProductData))
      .catch(err => setError({ errors: err.response.status }))
  }, [])

  return (
    <nav
      className="navbar is-white is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link id="homeicon" className="navbar-item is-centered" to="/">
          Golden Shoe
        </Link>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navDrop"
          onClick={handleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navDrop" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <Link
              className="navbar-link is-arrowless"
              id="womens-title"
              to="/womens"
            >
              Womens
            </Link>
            <div
              className="navbar-dropdown is-hidden-mobile"
              data-style="width: 18rem"
              id="womens-dropdown"
            >
              <div className="columns is-multiline">
                <div className="column">
                  <div
                    className="title"
                    style={{ marginLeft: 10, textTransform: 'uppercase' }}
                  >
                    Categories
                  </div>
                  <Link className="navbar-item" to="/womens">
                    All
                  </Link>
                </div>
                <div className="column">
                  <div
                    className="title"
                    style={{ marginLeft: 10, textTransform: 'uppercase' }}
                  >
                    Trends
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link is-arrowless" to="/returns">
              Returns
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable is-hidden-mobile">
            <div className="navbar-link is-arrowless">Search</div>
            <div className="navbar-dropdown is-hidden-mobile">
              <input
                className="navbar-item"
                type="text"
                placeholder="Search for items..."
                style={{ margin: '0 10px 0 10px' }}
              ></input>
              <button
                style={{
                  marginLeft: '10px',
                  border: 'none',
                  fontWeight: '600'
                }}
              >
                Search
              </button>
            </div>
          </div>
          <Link className="navbar-link is-arrowless" to="/cart">
            Cart
            <sup>
              <small className="cart-badge">({itemTotal()})</small>
            </sup>
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            {userInfo ? (
              <Link
                className="navbar-link is-arrowless"
                id="profile"
                to="/profile"
              >
                {userInfo.username}
              </Link>
            ) : (
              <div className="navbar-item is-arrowless">Profile</div>
            )}
            <div
              className="navbar-dropdown is-boxed"
              style={{ marginRight: 20 }}
            >
              {!userInfo && (
                <Link className="navbar-item" id="register" to="/register">
                  Join
                </Link>
              )}
              {!userInfo && (
                <Link className="navbar-item" id="login" to="/login">
                  Login
                </Link>
              )}
              {Auth.isAuthorized() && (
                <Link
                  className="navbar-item"
                  id="logout"
                  to="/"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
