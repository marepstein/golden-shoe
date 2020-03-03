import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { getCart } from '../lib/helpers'
import WomensCard from './WomensCard'
import Checkout from './Checkout'
import Login from './Login'
import UserContext from './UserContext'

const Cart = props => {
  const [items, setItems] = useState([])
  const [run, setRun] = useState(false)
  const { userInfo } = useContext(UserContext)

  useEffect(() => {
    setItems(getCart())
  }, [run])

  // pass run so that useEffect will only update component when run state changes i.e. remove product

  const showItems = items => {
    return (
      <div className="section">
        <div>Your cart has {`${items.length}`} items </div>
        <div className="columns">
          {items.map((results, i) => (
            <WomensCard
              key={i}
              results={results}
              availableSizes={[results.size]}
              showRemoveButton={true}
              setRun={setRun}
              run={run}
            />
          ))}
        </div>
      </div>
    )
  }

  const emptyCart = (
    <h2>
      Your Cart is empty. <br />
      <Link to="/">Continue Shopping</Link>
    </h2>
  )

  return (
    <div className="section">
      <div className="container">
        <div className="title">Shopping Cart</div>
      </div>

      <div className="columns is-multiline">
        <div className="column is-one-half-desktop">
          {items.length > 0 ? showItems(items) : emptyCart}
          <div className="column is-one-half-desktop">
            <Checkout results={items} />
          </div>
        </div>
        {!userInfo && (
          <div className="column is-one-half-desktop">
            <div className="box">
              <Login />
              <Link to="/register">Not a user Sign up?</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
