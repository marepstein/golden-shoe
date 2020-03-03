import React, { useContext } from 'react'
import UserContext from './UserContext'
import axios from 'axios'
import { clearCart } from '../lib/helpers'
import { useHistory } from 'react-router-dom'

const Checkout = ({ results }) => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  const history = useHistory()

  const totalsToAdd = results.map(result => {
    return result.count * parseFloat(result.price.replace('£', ''))
  })

  const getTotal = () => {
    return totalsToAdd.reduce((a, b) => {
      return a + b
    }, 0)
  }

  const changeStatus = () => {
    axios.patch('/api/products/purchase', { products: results }).then(() => {
      clearCart()
      history.push('/thanks')
    })
  }

  return (
    <div className="section">
      <div className="container">
        <div className="subtitle">Total: £{getTotal()}</div>

        <form>
          <input placeholder="Name"></input>
          <input placeholder="Card Number"></input>
          <input placeholder="CVV"></input>
        </form>
        <button onClick={changeStatus}>Checkout</button>
      </div>
    </div>
  )
}

export default Checkout
