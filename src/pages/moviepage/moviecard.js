import React,{useState} from 'react'
import { Image_Url } from '../../images/images'
import Card from '../../Component/Card/card'
const Moviecard = ({handleAddToCart}) => {
 
  return (
    <div className='bg-[#000000]'>
      <Card handleAddToCart = {handleAddToCart}/>

    </div>
  )
}

export default Moviecard