import React from 'react';
import placeholderImg from '../images/placeholder.png';


const Movie = (props) => {
  
  // // let storedMovie = props.nominees.find(o => o.id === props.movie.id);
  // const nominateDisabled = storedMovie ? true : false;

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
        <button 
            className='nominate-btn'
            onClick={props.nominateMovie(props.movie)}
            // disabled={nominateDisabled}
            >
            Nominate
          </button>
        </div>
      </div>
    )} 

export default Movie;
