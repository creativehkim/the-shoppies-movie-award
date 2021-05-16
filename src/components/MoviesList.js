import React from 'react';
import Spinner from './Loader';
import Movie from './Movie';


const MoviesList = ({movies, isLoading, searchValue, onClick, nominatedMovies }) => {
        console.log(nominatedMovies)

    return isLoading ? (
        <Spinner />) :

        (<div className='search-results'>
            <h1>Results for "{searchValue}"</h1>
            <ul className="movie-list">
                {movies.map(movie => 
                    <Movie 
                        key={movie.imdbID} 
                        movie={movie} 
                        {...movie} 
                        onClick={onClick}
                        nominatedMovies={nominatedMovies}
        
                    />
                )}
            </ul>
        </div>
    )
}

export default MoviesList
