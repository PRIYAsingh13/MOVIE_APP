import React,{useState} from 'react'

import Header from './Header/header'
import Moviecard from '../pages/moviepage/moviecard'

const State = () => {
    const [cartCount, setCartCount] = useState(0)
    console.log(cartCount)
    const handleAddToCart = () => {
        setCartCount(prevCount => prevCount + 1)
    }
  return (
    <div> <Header cartCount={cartCount}/>
    <Moviecard handleAddToCart={handleAddToCart}/>
   </div>
  )
}

export default State