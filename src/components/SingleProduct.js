import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import UserContext from './UserContext'
import { addItem } from '../lib/helpers'

const SingleProduct = props => {
  const [productData, setProductData] = useState({})
  const [added, setAdded] = useState({})
  const { userInfo, setUserInfo } = useContext(UserContext)
  const [availableProducts, setAvailableProducts] = useState([])
  const [selectedProductId, setSelectedProductId] = useState('')

  useEffect(() => {
    const id = props.match.params.id

    axios
      .get(`/api/products/${id}`)
      .then(res => {
        console.log(res.data)

        const newData = res.data
        setProductData(res.data[0])

        setAvailableProducts(
          res.data.filter(product => product.status === 'available')
        )

        if (userInfo) {
          setUserInfo(userInfo)
          const alreadyAdded = userInfo.favourites.some(product => {
            return product._id === newData._id
          })
          setAdded(alreadyAdded)
        }
      })
      .catch(err => console.log(err))
  }, [userInfo])

  const addToCart = () => {
    const product = availableProducts.filter(
      product => product._id === selectedProductId
    )

    addItem(product[0], () => {
      props.history.push('/cart')
    })
  }

  return (
    <div className="section">
      <div className="container">
        <div className="content-div">
          <div className="card has-text-centered" id="inner-border-card">
            <div className="image">
              <img src={productData.image} />
            </div>
            <h1 className="title">{productData.name}</h1>
            <h1
              className="subtitle is-size-3-desktop is-size-3-mobile is-size-3-tablet"
              id="location"
            >
              {productData.price}
            </h1>
            {availableProducts && (
              <div className="select">
                <select
                  onChange={e => {
                    setSelectedProductId(e.target.value)
                  }}
                  defaultValue={selectedProductId}
                >
                  <option value={selectedProductId} disabled>
                    Select Size
                  </option>
                  {availableProducts.map(product => (
                    <option key={product._id} value={product._id}>
                      {product.size}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="info">{productData.productDescription}</div>
            <div>
              <br />
              {availableProducts ? (
                selectedProductId ? (
                  <button onClick={addToCart}>Add to cart</button>
                ) : null
              ) : (
                <div>Sold Out</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
