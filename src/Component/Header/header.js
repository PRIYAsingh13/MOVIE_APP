import React, { useState } from 'react'
import { BiCameraMovie } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io"
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import Cartpopup from '../popup/cartpopup';

const Header = ({ cartCount, selectedMovies, removeFromCart }) => {
    const [showPopup, setShowPopup] = useState(false);
    
    const handleCartClick = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="head bg-[#111828] py-[15px] fixed top-0 right-0 left-0">
            <div className="flex justify-between w-[90%] m-auto items-center">
                <div className='flex items-center gap-[10px]' >
                    <div> <BiCameraMovie className="text-[#eace51] text-[30px]" /></div>
                    <div className='text-[#fbffff] font-[600] text-[30px]'>CineFlix</div>
                </div>

                <div className='head-icons text-[#6c7383] flex gap-[20px] text-[20px]'>
                    <IoIosNotificationsOutline />
                    <div className='cursor-pointer' onClick={handleCartClick}>
                        <IoCartOutline />
                        {cartCount > 0 && (
                            <span className='absolute top-4 right-[7.5%] font-[600] rounded-[50%] p-[1px] w-[20px] h-[20px] bg-[yellow] flex items-center justify-center text-[15px]'>{cartCount}</span>
                        )}
                    </div>
                    <FaRegUserCircle />

                </div>
            </div>
            {showPopup && cartCount > 0 &&(
                <Cartpopup onClose={() => setShowPopup(false)} selectedMovies={selectedMovies} removeFromCart={removeFromCart} />
            )}
        </div>
    )
}

export default Header