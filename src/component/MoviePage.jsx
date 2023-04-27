import React, { useState, useEffect } from 'react'
import { API_URL } from "../context"
import {NavLink, useParams} from 'react-router-dom'

function MoviePage() {
 
  const { id } = useParams()

  const [isLoading,setIsLoading] = useState(true);
  const [movie, setMovie] = useState('');


  const getMovies = async function (url) {
    setIsLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json();
      console.log(data)

      if (data.Response === 'True') {
        setMovie(data)
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`)
    }, 1500);

    return () => clearTimeout(timerOut)
  }, [id])

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }
return (
      <section className='movie-section'>
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="title">
              {movie.Title}
            </p>
            <p className='card-text'>{movie.Released}</p>
            <p className='card-text'>{movie.Genre}</p>
            <p className='card-text'>{movie.imdbRating}</p>
            <p className='card-text'>{movie.Country}</p>
            <NavLink className='back-btn' to='/'>Go Back</NavLink>
          </div>
        </div>
      </section>

  )
}

export default MoviePage
