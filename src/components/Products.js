import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
	

  // const womens = initialProductData.map((elem) => {
  //   return elem.category.filter((el) => {
  //     return el.includes('Womens')
  //   })
  // })
	

  return <div className="section">
    <div className="container">
      <div className='columns is-mobile is-multiline'>
		
        {productData.map((elem, i) => {
          return <div className="column" key={i} value={elem}>{elem}</div>
        })}
      </div>
    </div>
  </div>


}

export default Products