
import Movie from './Movie';


const SearchResults = (props) => {
  
  return (
    <div className='search-results'>
      <h1>Results for "{props.searchValue}"</h1>
      <ul className='movie-list'>
        {props.movies.map(movie => 
          <Movie {...movie} key={movie.imdbID} movie={movie} nominateMovie={props.nominateMovie}/>)}

      </ul>
    </div>
  )
}

export default SearchResults;
