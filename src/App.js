import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import SearchBox from './components/SearchBox';
import MoviesList from './components/MoviesList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue]  = useState('');
  const [ isLoading, setIsLoading] = useState(false);
  
  // fetch movies from OMDB API
  const fetchMovies = async (searchValue) => {
    const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=45defecc&type=movie`;
    const res = await fetch(URL);
    const data = await res.json();

    setIsLoading(true);


    return data;
  }

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue])

  return (
    <Router>
      <div className="container">
        <Header />

        <Route path='/' exact render={(props) => (
          <div>
            <SearchBox 
              searchValue={searchValue} 
              setSearchValue={setSearchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
              {movies.length > 0 ? 
              <MoviesList /> :
              'No Movies To Show'
              } 
          </div>
        )} />

      </div>
    </Router>
  );
}

export default App;
