import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCart, removeItem } from './CartFunctions'
import WomensCard from './WomensCard'
import Checkout from './Checkout'
import Register from './Register'
import Login from './Login'

const Cart = (props) => {

  const [items, setItems] = useState([])
  const [run, setRun] = useState(false)

  useEffect(() => {
    setItems(getCart())
  }, [run])
	
  // pass run so that useEffect will only update component when run state changes
	
  const showItems = items => {
    return ( <div className="section">
      <div>Your cart has {`${items.length}`} items </div>
      {/* < hr/> */}
      <div className="columns">
        {items.map((results, i) => ( <WomensCard 
          key={i} 
          results={results} 
          showAddToCartButton={false} 
          cartUpdate={true}
          showRemoveButton={true}
          setRun={setRun} 
          run={run}
        /> ))}	
      </div>
    </div>
    )
  }
	
  const emptyCart = (
    <h2> 
			Your Cart is empty. < br/> 
      <Link to="/">Continue Shopping</Link>
    </h2>
  )

  return <div className="section">
    <div className="container">
      <div className="title">
				Shopping Cart
      </div>
    </div>
     
    <div className="columns is-multiline">
      <div className="column is-one-half-desktop">
        {items.length > 0 ? showItems(items) : emptyCart}
        <div className="column is-one-half-desktop">
          <Checkout results={items} />
        </div>
      </div>
      <div className="column is-one-half-desktop">
        <div className="box">
          <Login /> 
          <Link to="/register">Not a user Sign up?</Link>
        </div>
      </div>
    </div>
    
  </div>


 

}


export default Cart