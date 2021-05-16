import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Nominated from './Pages/Nominated';
import SearchBox from './components/SearchBox';
import MoviesList from './components/MoviesList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue]  = useState('');
  const [ isLoading, setIsLoading] = useState(false);
  const [nominatedMovies, setNominatedMovies] = useState([]);
  
  // fetch movies from OMDB API
  const fetchMovies = async (searchValue) => {
    const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=45defecc&type=movie`;
    const res = await fetch(URL);
    const data = await res.json();

    setIsLoading(true);



    if(data.Search) {
      setMovies(data.Search)
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue])

  const nominateMovie = (movie) => {
    const newNominatedMovies = [...nominatedMovies, movie];
    setNominatedMovies(newNominatedMovies);
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path='/nominated' component={ Nominated } />

        <Route path='/' exact render={() => (
          <div>
            <SearchBox 
              searchValue={searchValue} 
              setSearchValue={setSearchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
            />
              {movies.length > 0 ? 
              <MoviesList 
                isLoading={isLoading} 
                movies={movies} 
                setMovies={setMovies} 
                searchValue={searchValue}
                onClick={nominateMovie}
                nominatedMovies={nominatedMovies}
                /> :
              <h2 className='no-movies'>No Movies To Show</h2>
              } 
          </div>
        )} />
        
      </div>
    </Router>
  );
}

export default App;
