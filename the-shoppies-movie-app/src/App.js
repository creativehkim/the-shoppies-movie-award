import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import NominatedMovies from './pages/NominatedMovies'
import PageLoader from './components/PageLoader.js';
import './App.css';


const App = () => {
  const [ movies, setMovies] = useState([]);
  const [ searchValue, setSearchValue] = useState('');
  const [ nominees, setNominees ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  
  

  const getMovieRequest = async (searchValue) => {
    const API_KEY = '45defecc'
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&type=movie`;
    const response = await fetch(url);
    const data = await response.json();

    setLoading(true);

    if(data.Search) {
      setMovies(data.Search);
    }
  };

  const saveToLS = (items) => {
    localStorage.setItem('the-shoppies-awards-nominations', JSON.stringify(items))
  }

  const nominateMovie = (movie) => {
    const newNominatedList = [...nominees, movie];
    setNominees(newNominatedList);
    saveToLS(newNominatedList);
  }

  const removeMovie = (movie) => {
    const newNominatedList = nominees.filter(
      (nominee) => nominee.imdbID !== movie.imdbID
    );
    
    setNominees(newNominatedList);
    saveToLS(newNominatedList);
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieNominations = JSON.parse(localStorage.getItem('the-shoppies-awards-nominations'));
    setNominees(movieNominations);
  }, [])

  return (

    <Router>
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Switch>
        <Route path="/" exact>
          {loading ? 
            <SearchResults 
              movies={movies} 
              nominateMovie={nominateMovie}
              nominees={nominees}
              setMovies={setMovies} 
              searchValue={searchValue}/> 
            : <PageLoader/>}
          
        </Route>
        <Route path="/nominees" component={NominatedMovies} />
          
      </Switch>
    </Router>

    );
}

export default App;
