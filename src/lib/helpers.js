// We can use the map method to create a temporary array, then we use the indexOf method to see if we can find the same object inside of our map.
// If we do, then we know it is a duplicate.

export const removeDuplicates = (myArr, prop) => {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}

export const addItem = (item, next) => {
  let cart = []

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    }

    if (item) {
      cart.push({
        ...item,
        count: 1
      })
    }

    cart = Array.from(new Set(cart.map(product => product._id))).map(id => {
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

export const removeItem = productId => {
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

export const clearCart = () => {
  localStorage.setItem('cart', JSON.stringify([]))

  return []
}
