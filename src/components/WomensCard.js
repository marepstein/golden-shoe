import React, { useState } from 'react' 
import { Link, Redirect } from 'react-router-dom'
import { addItem, updateItem, removeItem } from './CartFunctions'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import regeneratorRuntime from 'regenerator-runtime'


const WomensCard = ({ 
  results, 
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveButton = false,
  setRun = f => f, // default value of function
  run = undefined
}) => {

  const [redirect, setRedirect] = useState(false)
  const [count, setCount] = useState(results.count) // this counts the product quantity and updates state with our change function

  

	
  const showAddToCart = showAddToCartButton => {
    return ( showAddToCartButton && (
      <button className="button" onClick={addToCart}>Add to Cart</button> )
    )
  }
	
  const showRemove = showRemoveButton => {
    return ( showRemoveButton && (
      <button
        onClick={() => {
          removeItem(results._id)
          setRun(!run)  // run useEffect in parent Cart
        }}
      > Remove </button>
    )
    )
  }

  const addToCart = () => {
    addItem(results, () => {
      setRedirect(true) 
    })
  }

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />
    }
  }
	
  const handleChange = productId => e => {
    setRun(!run)
    setCount(e.target.value < 1 ? 1 : e.target.value)
    if (e.target.value >= 1) {
      updateItem(productId, e.target.value)
      console.log(productId)
      console.log(count)
    }
  } 
	
  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && ( <div>
        <div className="field is-grouped">
          <p className="control">
            <input className="input" 
              style={{ width: 50 }}
              type="number" 
              value={count} 
              onChange={handleChange(results._id)} // attach the id so we know which product we are updating if there are many products 
            />
          </p>
        </div>
      </div>
      )
    )
  }
	
  return <div className="column">
    <div className="card">
      <div className="card-image">
        <figure className='image is-5by4 is-centered'>
          {shouldRedirect(redirect)}
          <img className='image' src={results.image} alt={results.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="card-footer">
          <div className="rows is-multiline">
            <div className="row">
              <div className="subtitle">{results.price}</div>
            </div>
            <div className="row">
              <Link to={`/womens/${results._id}`}><button>View Product</button></Link>
              {showAddToCart(showAddToCartButton)}
              {showRemove(showRemoveButton)}
              {showCartUpdateOptions(cartUpdate)} 
            </div>     
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>

}

export default WomensCard