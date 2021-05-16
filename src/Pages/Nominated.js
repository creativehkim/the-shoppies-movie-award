import React from 'react';
import { Link } from 'react-router-dom';
import MoviesList from '../components/MoviesList';

const Nominated = (props) => {
  return (
    <div>
      <Link to="/">Go Back</Link>
      <MoviesList movies={props.nominatedMovies}/>
    </div>
  )
}

export default Nominated
