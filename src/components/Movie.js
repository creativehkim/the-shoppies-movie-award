import React from 'react';
import placeholderImg from '../images/placeholder.png';
import Button from './Button';


const Movie = (props) => {


  return (
      <div className='movie'>
        <div className="poster-wrapper">
          {props.Poster === "N/A" ? (
            <img src={ placeholderImg } alt={props.Title} />
          ) : (
            <img src={props.Poster} alt={props.Title} />
          )}
          
        </div>
        <div className="movie-info">
          <h3>{props.Title}</h3>
          <span>{props.Year}</span>
        </div>
        <div className="movie-overlay">
        <Button 
          text='Nominate' 
          onClick={props.onClick} 
          movie={props.movie}
          
        />
        </div>
      </div>
    )} 

export default Movie;