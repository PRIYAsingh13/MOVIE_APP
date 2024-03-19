import React from 'react'
import Card from '../../Component/Card/card'
const Moviecard = ({handleAddToCart, handleAddCartClick}) => {
 
  return (
    <div className='bg-[#000000]'>
      <Card handleAddToCart = {handleAddToCart} handleAddCartClick={handleAddCartClick}/>
    </div>
  )
}

export default Moviecard