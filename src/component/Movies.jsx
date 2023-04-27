import React from 'react'
import { useGlobalContext } from '../context'
import { NavLink } from 'react-router-dom'

function Movies() {
  const { movie, isLoading } = useGlobalContext()

  if (isLoading) {
    return (
    <div className=''>
      <div className="loading">Loading...</div>
    </div>
    )
  }
  return (
    <section className='movie-page'>
      <div className="container grid grid-4-col">
        {movie.map((curMovie) => {
          const { imdbID, Title, Poster } = curMovie;
          const movieName = Title.substring(0,15);

          return (
          <NavLink key={imdbID} to={`/movie/${imdbID}`}>
            <div className='cardmovie'>
              <div className="card-info">
                <h2>{movieName.length >= 15 ? `${movieName}...`:movieName}</h2>
                <img src={Poster} alt={imdbID} />
              </div>
            </div>
          </NavLink>
          )
        }
        )}

      </div>
    </section>
  )
}

export default Movies
