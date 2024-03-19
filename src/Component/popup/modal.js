import React, { useState, useEffect } from 'react'
import { Image_Url } from '../../images/images'
import { IoCartOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Modal = ({ isOpen, movie, onClose, handleAddToCart, handleAddCartClick }) => {

    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        setAddedToCart(false);
    }, [movie]);

    

    const handleAddToCartClick = () => {
        if (!addedToCart) {
            setAddedToCart(true);
            handleAddToCart();
            handleAddCartClick(movie)
        }
    };
   
    return (
        <div className= {`bg-[#111828] fixed top-[15%] left-[25%] w-[50%]  h-fit p-[20px]  ${isOpen ? '' : 'hidden'}`} style={{ zIndex: 50 }} >
            {isOpen && movie && (
                <div className='flex w-[100%] gap-[20px]'>
                    <div className='w-[33%] gap-[10px] flex flex-col'>
                        <img className='w-[100%] h-[350px]' src={Image_Url[movie.image]} alt={movie.name} />
                        <button onClick={handleAddToCartClick}  className='bg-[yellow] flex items-center w-[100%]  justify-center py-[10px]' disabled={addedToCart}> <IoCartOutline /> Add to Cart</button>
                    </div>
                    <div className='w-[67%] text-[#6c7383]'>
                        <div>
                            <button className='absolute top-0 right-0 p-2 text-[30px]' onClick={onClose}><IoIosClose /></button>
                            <p className='text-[25px] font-[700] text-white'>{movie.name}</p>
                            <div className='flex items-center'>
                                <span>2023</span><LuDot /><span>158 minutes</span>
                            </div>
                            <div className='mb-[10px] flex items-center gap-[10px] text-[15px] font-[600] text-[#6c7383]'>
                                <span className='flex'>{movie.type}</span><LuDot />
                                <span className='flex items-center gap-[5px]'><IoMdStar />
                                    {movie.rating}</span><LuDot />
                                <span className='flex'>{movie.season}</span>
                            </div>
                            <hr />
                            <div className='mt-[10px]'>
                                Rahul is a singer, who loses his career due to his drinking habits. He meets Arohi in a
                                bar in Goa, where she works to earn a living. Impressed by her singing, he promises her
                                to take her to Mumbai and make her a star, where they fall in love with each other.
                                Aashiqui 2 is a musical love story of these lovers who goes through love and hate,
                                fame and failure in their lives. However will they stay together accepting their
                                success, or will they breakup due to their ego

                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Modal