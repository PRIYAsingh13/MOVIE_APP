import React, { useState } from 'react'
import { BiCameraMovie } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io"
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Header = ({cartCount}) => {
    console.log(cartCount)

    return (
        <div className="head bg-[#111828] py-[15px]">

            <div className="flex justify-between w-[90%] m-auto items-center">

                <div className='flex items-center gap-[10px]' >
                   <div> <BiCameraMovie className="text-[#eace51] text-[30px]" /></div>
                    <div className='text-[#fbffff] font-[600] text-[30px]'>CineFlix</div>
                </div>

                <div className='head-icons text-[#6c7383] flex gap-[20px] text-[20px]'>
                    <IoIosNotificationsOutline />
                    <div>
                    <IoCartOutline />
                    {cartCount>0 && (
                        <span className='absolute top-1 right-[7%] font-[700] rounded-[50%] p-[1px] w-[25px] h-[25px] text-center  bg-[yellow]'>{cartCount}</span>
                    )}
                    </div>
                    <FaRegUserCircle />

                </div>
            </div>
        </div>
    )
}

export default Header