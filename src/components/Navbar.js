import React, { useContext, useState, useEffect  } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/auth'
import UserContext from './UserContext'


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
    axios.get('/api/products')
      .then(resp => {
        setInitialProductData(resp.data)
        setFilteredData([...resp.data])
      })
      .then(console.log(initialProductData))
      .catch(err => setError({ errors: err.response.status }))
  }, [])

  // function toggleForm() {
  //   setSearchModal(!searchModal)
  // }
	
  // function handleSearch

  // const categories = initialProductData.map((elem) => {
  //   return elem.category.filter((el) => {
  //     return el.includes('Heels')
  //   })
  // })
	

  const filtered = initialProductData.filter((product) => {
    return product['category'].some(function(category) {
      return category.product === 'Womens'
    })
	})
	
	const womens = initialProductData.filter(product => product.category === 'Womens')

  // function filter (initialProductData) {
  //   return initialProductData.map((elem) => {
  //     return elem.category === 'Womens'
  //   })
  // }
	
  // var filtered = initialProductData.filter(filter)

  // const categories = initialProductData.filter((el) => {
  //   return el.includes('Heels')
  // })
	
  console.log(womens)
	
  // {
  // 	return categories.some(element => item.category.includes('Womens'))
  // })
	
 

  return <nav className="navbar is-white is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link id="homeicon" className="navbar-item is-centered" to="/">Golden Shoe</Link>
      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navDrop" onClick={handleMenu}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navDrop" className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link is-arrowless" id="womens-title" to="/womens">
            Womens
          </Link>
          <div className="navbar-dropdown is-hidden-mobile" data-style="width: 18rem" id="womens-dropdown">
            <div className="columns is-multiline">
              <div className="column">
                <div className="title" style={{ marginLeft: 10, textTransform: 'uppercase' }}>Categories</div>
                <Link className="navbar-item">All</Link>
                <Link className="navbar-item">Heels</Link>
                <Link className="navbar-item">Trainers</Link>
                <Link className="navbar-item">Boots</Link>
                <Link className="navbar-item">Flats</Link>
                <Link className="navbar-item">Sandals</Link>
                <Link className="navbar-item">Pumps</Link>
                <Link className="navbar-item">Slippers</Link>
                <Link className="navbar-item">Loafers</Link>
              </div>
              <div className="column">
                <div className="title" style={{ marginLeft: 10, textTransform: 'uppercase' }}>Trends</div>
                <Link className="navbar-item">Most Loved</Link>
                <Link className="navbar-item">Night Out</Link>
                <Link className="navbar-item">Sporty</Link>
                <Link className="navbar-item">Summer</Link>
              </div>
            </div>
          </div>
        </div>
         
						
      
        
        <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link is-arrowless" to="/mens">
            Mens
          </Link>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link is-arrowless" to="/mens">
            Sale
          </Link>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link is-arrowless" to="/mens">
            About
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable is-hidden-mobile">
          <div className="navbar-link is-arrowless">Search</div>
          <div className="navbar-dropdown is-hidden-mobile">
            <input className="navbar-item" type="text" placeholder="Search for items..." style={{ margin: '0 10px 0 10px' }}></input>
            <button style={{ marginLeft: '10px', border: 'none', fontWeight: '600' }}>Search</button>
          </div>
        </div>
          
        {/* <div className={searchModal === true ? 'modal is-active' : 'modal'}>
            <div className="modal-background" onClick={toggleForm}></div>
            <div className="modal-content">
              <div className="field">
                <div className="control" style={{ position: 'relative' }}>
                  <input className="input" 
                    type="text" 
                    placeholder="Search..." 
                  />
                  <button style={{ height: '20px', border: 'none' }}>Submit</button>
                </div>
              </div> 
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={toggleForm}></button>
          </div>
          <button className="button" onClick={toggleForm} style={{ border: 'none', fontFamily: 'Mukta', color: 'rgb(0, 0, 0)' }}>Search</button>  */}
          
       
        {/* <div className="navbar-item has-dropdown is-hoverable"> */}
        <Link className="navbar-link is-arrowless" to="/mens">
            Cart (0)
        </Link>
        {/* </div> */}
        <div className="navbar-item has-dropdown is-hoverable">
          {userInfo ? <Link className="navbar-link is-arrowless" id="profile" to="/profile">{userInfo.username}</Link> : <div className="navbar-item is-arrowless" >Profile</div>}
          <div className="navbar-dropdown is-boxed" style={{ marginRight: 20 }}>
            {!userInfo && <Link className="navbar-item" id="register" to="/register">
              Join
            </Link>}
            {!userInfo && <Link className="navbar-item" id="login" to="/login">
              Login
            </Link>}
            {Auth.isAuthorized() &&
              <Link className="navbar-item" id="logout" to="/" onClick={handleLogout}>
                Logout
              </Link>}
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar