import React, { useState } from 'react'

import Header from './Header/header'
import Moviecard from '../pages/moviepage/moviecard'

const State = () => {
  const [cartCount, setCartCount] = useState(0)
  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1)
  }

  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleAddCartClick = (movie) => {
    setSelectedMovies(prevSelectedMovies => {
      if (!prevSelectedMovies || prevSelectedMovies.length === 0) {
        return [movie];
      } else {
        if (!prevSelectedMovies.find(selectedMovie => selectedMovie.id === movie.id)) {
          return [...prevSelectedMovies, movie];
        }
        return prevSelectedMovies;
      }
    });
  };

  const removeFromCart = (movieToRemove) => {
    setSelectedMovies(prevSelectedMovies => {
      return prevSelectedMovies.filter(movie => movie.id !== movieToRemove.id);
    });
    setCartCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <Header cartCount={cartCount} selectedMovies={selectedMovies} removeFromCart={removeFromCart} />
      <Moviecard handleAddToCart={handleAddToCart} handleAddCartClick={handleAddCartClick} />
    </div>
  )
}

export default State