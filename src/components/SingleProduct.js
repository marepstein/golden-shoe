import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'
import Auth from '../lib/auth'
import { addItem } from './CartFunctions'


// const errorInitialState = {
//   error: ''
// } 


const SingleProduct = (props) => {

  const [productData, setProductData] = useState({})
  const [error, setError] = useState(false)
  const [added, setAdded] = useState({})
  const [info, setInfo] = useState({})
  // const [redirect, setRedirect] = useState(false)

  const { userInfo, setUserInfo } = useContext(UserContext)
	

	
  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/api/products/${id}`)
      .then(res => {
        const newData = res.data
        setProductData(res.data)
        if (userInfo) {
          setUserInfo(userInfo)
          const alreadyAdded = userInfo.favourites.some((product) => {
            return product._id === newData._id
          })
          setAdded(alreadyAdded)
        }
      })
      .catch(err => console.log(err))
  }, [userInfo])
	

  const favourite = () => {
    const update = info.favourites
    update.push(productData)
    setInfo({ ...info, favourites: update })
    axios.put('/api/profile/edit', info, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        setUserInfo(res.data.user)
      })
      .catch(err => {
        props.history.push('/login')
        console.log(err)
      })
  }
	
  const addToCart = () => {
    addItem(productData, () => {
      props.history.push('/cart')
    })
  }

  // const shouldRedirect = redirect => {
  // 	if (redirect === true )
  // }


  console.log(productData)

  return <div className="section">
    <div className="container">
      <div className="content-div">
        <div className="card has-text-centered" id="inner-border-card">
          <div className="image"><img src={productData.image} /></div>
          <h1 className="title">{productData.name}</h1>
          <h1 className="subtitle is-size-3-desktop is-size-3-mobile is-size-3-tablet" id="location">{productData.price}</h1>
          <div className="subtitle">UK: {productData.size}</div>
          <div className="info">{productData.productDescription}</div>
          <div>
            <br />
            <button onClick={addToCart}>Add to cart</button>
            {added ? <button className="button is-white" title="Disabled button" disabled>Added</button> : userInfo && info.username && <button className="button is-white" onClick={favourite}>Save to Profile</button>}
          </div>
        </div>
      </div>
    </div>
  </div>


}


export default SingleProduct