import React, { useState, useEffect } from 'react'
import { Image_Url } from '../../images/images'
import { IoCartOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import Modal from '../popup/modal';



const Card = ({handleAddToCart}) => {
    const [moviesData, setMoviesData] = useState(null)
    const [selectedMovies, setSelectedMovies] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showMore, setShowMore] = useState(8)

    const handleLoadMore=()=>{
        setShowMore(prevShow => prevShow+8)
    }
    const handleShowLess=()=>{
        setShowMore(8)
    }

    // console.log(moviesData)
    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch('/jsonfile/movie.json')
                const data = await response.json()
                setMoviesData(data.movies)
            }
            catch (error) {
                console.log("error")
            }
        }
        fetchMovieData()
    }, [])

    const handelAddButtonClick = (movie) =>{
        setSelectedMovies(movie)
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    return (
        <div className='flex flex-wrap w-[90%] m-auto gap-[20px] py-[20px]'>
            {moviesData && moviesData.slice(0, showMore).map((item, index) => (
                <div key={index}>
                    <div className='w-[276px] bg-[#111828]'>
                        <img className="object-cover w-[100%] h-[400px]" src={Image_Url[item.image]} />
                        <div className='p-[10px]'>
                            <div className='text-[25px] font-[700] text-[white]'>
                                <p>{item.name}</p>
                            </div>
                            <div className=' flex items-center gap-[10px] text-[15px] font-[600] text-[#6c7383]'>
                                <span className='flex'>{item.type}</span><LuDot />
                                <span className='flex items-center gap-[5px]'><IoMdStar />
                                    {item.rating}</span><LuDot />
                                <span className='flex'>{item.season}</span>
                            </div>
                            <div className='flex justify-between gap-[10px]'>
                                <button className='bg-[yellow] flex items-center  px-[40px] h-[50px] w-[50%] ' onClick={() => handelAddButtonClick(item)}><IoCartOutline />Add</button>
                                <button className='border-[1px] border-solid border-[#6c7383] h-[50px] text-[white] px-[30px] w-[50%]'>View details</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {showMore<moviesData?.length?(
                <button  className='bg-[yellow]' onClick={handleLoadMore}>Load more</button>
            ):(
                <button  className='bg-[yellow]' onClick={handleShowLess}>Show less</button>
  
            )}
            <Modal isOpen={isModalOpen} movie={selectedMovies} onClose={closeModal} handleAddToCart={handleAddToCart}/>
        </div>
    )
}

export default Card