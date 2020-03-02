
export const addItem = (item, next) => {
  let cart = []

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    }
		
    if (item.quantity >= 1) {
      cart.push({
        ...item, 
        count: 1
      })
			
    }
    
    // to avoid duplicated item when pressing add to cart twice (new Set removes the duplicates)

    cart = Array.from(new Set(cart.map((product) => (product._id)))).map(id => {
      return cart.find(product => product._id === id)
    })

    localStorage.setItem('cart', JSON.stringify(cart))
    next()
  }
	
}

export const itemTotal = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart')).length
    }
    return 0
  } 
}


export const getCart = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart'))
    }
    return []
  }
}

// function that searches for the cart item by ID and sets the count to the number set 
export const updateItem = (productId, count) => {
  let cart = []
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    }
    cart.map((product, i) => {
      if (product._id === productId) {
        cart[i].count = count 
      }
    })
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}


export const removeItem = (productId) => {
  let cart = []
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    }
    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1)
      }
    })
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  return cart
}

