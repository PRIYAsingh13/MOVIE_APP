import React, { useState, useEffect } from 'react'
import { Image_Url } from '../../images/images'
import { IoCartOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import Modal from '../popup/modal';

const Card = ({ handleAddToCart, handleAddCartClick }) => {
    const [moviesData, setMoviesData] = useState(null)
    const [selectedMovies, setSelectedMovies] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showMore, setShowMore] = useState(8)

    const handleLoadMore = () => {
        setShowMore(prevShow => prevShow + 8)
    }
    const handleShowLess = () => {
        setShowMore(8)
    }

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch('/jsonfile/movie.json')
                const data = await response.json()
                setMoviesData(data.movies)
            }
            catch (error) {
                return error;
            }
        }
        fetchMovieData()
    }, [])

    const handelAddButtonClick = (movie) => {
        setSelectedMovies(movie)
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden';
    }

    const closeModal = () => {
        setIsModalOpen(false)
        document.body.style.overflow = 'auto';
    }
    return (
        <div className=' w-[90%] m-auto mt-[75px]'>
            <div className='flex flex-wrap w-[90%] m-auto gap-[20px] py-[20px]'>
                {moviesData && moviesData.slice(0, showMore).map((item, index) => (
                    <div key={index}>
                        <div className='w-[240px] bg-[#111828]'>
                            <img className="object-cover w-[100%] h-[320px]" src={Image_Url[item.image]} alt={item.name} />
                            <div className='p-[10px]'>
                                <div className='text-[20px] font-[600] text-[white]'>
                                    <p>{item.name}</p>
                                </div>
                                <div className=' flex items-center text-[15px] font-[600] text-[#6c7383]'>
                                    <span className='flex'>{item.type}</span><LuDot />
                                    <span className='flex items-center gap-[5px]'><IoMdStar />
                                        {item.rating}</span>
                                    {item.season && (
                                        <>
                                            <LuDot />
                                            <span className='flex'>{item.season}</span>
                                        </>
                                    )}
                                </div>
                                <div className='flex justify-between gap-[10px] mt-[10px]'>
                                    <button className='bg-[yellow] flex items-center px-[30px] h-[40px] w-[50%] text-[15px]' onClick={() => handelAddButtonClick(item)}><IoCartOutline />Add</button>
                                    <button className='border-[1px] border-solid border-[#6c7383] h-[40px] text-[white] px-[10px] w-[50%] text-[15px]'>View details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center p-[10px]'>
                {showMore < moviesData?.length ? (
                    <button className='bg-[yellow] p-[10px]' onClick={handleLoadMore}>Load more</button>
                ) : (
                    <button className='bg-[yellow] p-[10px]' onClick={handleShowLess}>Show less</button>
                )}
            </div>

            <Modal isOpen={isModalOpen} movie={selectedMovies} onClose={closeModal} handleAddToCart={handleAddToCart} handleAddCartClick={handleAddCartClick} />

            {isModalOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-40" />}
        </div>
    )
}

export default Card