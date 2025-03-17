import React from 'react'
import Cart from '../Components/cart/Cart'
import Time from '../Components/Timer/Time'

const MainCart = () => {
  return (
    <div>
        <Cart/>
        <Time duration={2500 * 60 * 1000}/>
      
    </div>
  )
}

export default MainCart
