import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WomensCard from './WomensCard'
import { removeDuplicates } from '../lib/helpers'

const errorInitialState = {
  error: ''
}

const Womens = () => {
  const [productData, setProductData] = useState([])
  const [error, setError] = useState(errorInitialState)

  useEffect(() => {
    axios
      .get('/api/products')
      .then(resp => setProductData(resp.data))
      .then(console.log(productData))
      .catch(err => setError({ errors: err.response.status }))
  }, [])

  const womens = productData.filter(product => {
    return product.category.includes('Womens') && product.status !== 'sold'
  })

  const uniqueWomens = removeDuplicates(womens, 'productCode')

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {uniqueWomens.map((results, i) => {
            return (
              <WomensCard
                className="card"
                key={i}
                availableSizes={womens
                  .filter(women => {
                    return women.productCode === results.productCode
                  })
                  .map(women => women.size)}
                results={results}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Womens
