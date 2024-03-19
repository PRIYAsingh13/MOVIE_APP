import React from 'react'
import { IoIosClose } from "react-icons/io";
import { Image_Url } from '../../images/images';
import { IoCartOutline } from "react-icons/io5";

const Cartpopup = ({ selectedMovies, removeFromCart }) => {
    return (
        <div className="cart-popup fixed top-20 right-5 p-4 bg-[#111828] text-white">
            {selectedMovies.map((item, i) => (
                <>
                    <div className="grid grid-cols-2 gap-2" key={i}>
                        <div className="flex items-center">
                            <img src={Image_Url[item.image]} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                            <p className="ml-2">{item.name}</p>
                        </div>
                        <div className="flex justify-end items-center">
                            <button className="text-gray-500 hover:text-gray-700" onClick={() => removeFromCart(item)}>
                                <IoIosClose />
                            </button>
                        </div>
                    </div>
                    <div>
                        <hr className='mt-[10px] mb-[10px]' />
                    </div>
                </>
            ))}
            <div className='flex justify-between'>
                <div>
                    <p>Number of movies</p>
                    <p>3</p>
                </div>
                <div>
                    <p>Total Cost</p>
                    <h3 className='font-[700]'>$33.98</h3>
                </div>
            </div>
            <div className='flex flex-col gap-[10px] mt-[10px]'>
                <button className='flex items-center justify-center bg-[yellow] text-black w-[100%] p-[10px]'><IoCartOutline />Checkout</button>
                <button className='w-[100%] border border-solid border-white p-[10px]'>Countinue Shopping</button>
            </div>
        </div>
    )
}

export default Cartpopup