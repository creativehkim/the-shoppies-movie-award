import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

const Header = (props) => {
  

  return (
    <div className='header-container'>
      <div className="header-nav">
        <Link to='/'><h1>The Shoppies</h1></Link>
        <Link to="/nominees">
          <button className='nominees-btn'>Nomination List</button>
          <button className='return-btn' hidden>Return Home</button>
        </Link>
      </div>
      <div className="header-search">
        <SearchBox searchValue={props.searchValue} setSearchValue={props.setSearchValue}/>
      </div>
    </div>
  )
}

export default Header;
