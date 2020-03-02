import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import WomensCard from './WomensCard'

const errorInitialState = {
  error: ''
}


const Products = () => {

  const [productData, setProductData] = useState([])
  const [error, setError] = useState(errorInitialState)
	

  useEffect(() => {
    axios.get('/api/products')
      .then(resp => setProductData(resp.data))
      .then(console.log(productData))
      .catch(err => setError({ errors: err.response.status }))
  }, [])
	
  const womens = productData.filter(product => {
    return product.category.includes('Womens')
  })
	

  // console.log(womens)

  return <div className="section">
    <div className="container">
      <div className='columns is-mobile is-multiline'>
        {/* <div className="column is-one-quarter-desktop"> */}
        {womens.map((results, i) => {
          return <WomensCard className="card" key={i} results={results} />
        })}
      </div>
    </div>
  </div>



}

export default Products