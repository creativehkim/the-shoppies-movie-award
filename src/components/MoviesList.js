<<<<<<< HEAD
import React from 'react'

const MoviesList = () => {
    return (
        <div>
            
=======
import React from 'react';
import Spinner from './Loader';
import Movie from './Movie';


const MoviesList = ({movies, isLoading, searchValue}) => {
    return isLoading ? (
        <Spinner />) :

        (<div className='search-results'>
            <h1>Results for "{searchValue}"</h1>
            <ul className="movie-list">
                {movies.map(movie => 
                    <Movie key={movie.imdbID} movie={movie} {...movie} />
                )}
            </ul>
>>>>>>> 6d916d0 (Adding Movie component)
        </div>
    )
}

export default MoviesList
