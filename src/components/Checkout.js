import React, { useContext } from 'react'
import UserContext from './UserContext'
// import { Link } from 'react-router-dom'
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import regeneratorRuntime from 'regenerator-runtime'
import StripeCheckout from 'react-stripe-checkout'


const token = 'sk_test_x9HBah1ZB0fD6B8OHUaUfF7d002qZ7knTH'

const Checkout = ({ results }) => {

  const { userInfo, setUserInfo } = useContext(UserContext)


  // const stripe = useStripe()
  // const elements = useElements()

  // const handleSubmit = async (event) => {
  //   // Block native form submission.
  //   event.preventDefault()

  //   if (!stripe || !elements) {
  //     // Stripe.js has not loaded yet. Make sure to disable
  //     // form submission until Stripe.js has loaded.
  //     return
  //   }

  //   // Get a reference to a mounted CardElement. Elements knows how
  //   // to find your CardElement because there can only ever be one of
  //   // each type of element.
  //   const cardElement = elements.getElement(CardElement)
  //   // Use your card Element with other Stripe.js APIs
  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: 'card',
  //     card: cardElement
  //   })

  //   if (error) {
  //     console.log('[error]', error)
  //   } else {
  //     console.log('[PaymentMethod]', paymentMethod)
  //   }
  // }


  const totalsToAdd = results.map((result) => {
    return result.count * parseFloat(result.price.replace('£', ''))
  })
		

  const getTotal = () => {
    return totalsToAdd.reduce((a, b) => {
      return a + b 
    }, 0)
  }	
	

  const onToken = (token) => {
    console.log('Stripe Token', token)
  }

  
  return <div className="section">
    <div className="container">
      <div className="subtitle">Total: £{getTotal()}</div>
      <StripeCheckout
        name="Golden Shoe"
        description={'Your Cart'}
        token={onToken}
        amount={getTotal() * 100}
        stripeKey={'pk_test_AYAvnoD29OQZ3b7WEVnPxlmi00wlHRyEpT'}
        currency='GBP'
      >
      </StripeCheckout>
      {/* <div className="section">
      <Link to="/register"><button>Register</button></Link>
      <Link to="login"><button>Login</button></Link>
			</div> */}
    </div>
  </div> 
}

export default Checkout



       