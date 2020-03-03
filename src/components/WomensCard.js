import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { removeItem } from '../lib/helpers'

const WomensCard = ({
  results,
  showRemoveButton = false,
  // default value of function
  setRun = f => f,
  run = undefined,
  availableSizes
}) => {
  const [redirect, setRedirect] = useState(false)

  const showRemove = showRemoveButton => {
    return (
      showRemoveButton && (
        <button
          onClick={() => {
            removeItem(results._id)
            setRun(!run) // run useEffect in parent Cart
          }}
        >
          {' '}
          Remove{' '}
        </button>
      )
    )
  }

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />
    }
  }

  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-5by4 is-centered">
            {shouldRedirect(redirect)}
            <img className="image" src={results.image} alt={results.name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="card-footer">
            <div className="rows is-multiline">
              <div className="row">
                <div className="subtitle">{results.price}</div>
                <div className="subtitle">
                  Available Sizes - UK: {availableSizes.join(', ')}
                </div>
              </div>
              <div className="row">
                <Link to={`/womens/${results.productCode}`}>
                  <button>View Product</button>
                </Link>
                {showRemove(showRemoveButton)}
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default WomensCard
