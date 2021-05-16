import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';



const Header = ({ title }) => {
    return (
        <header className="header-container">
            <h1>{title}</h1>
            <Link to='/nominated'>Nominated Movies</Link>
        </header>
    )
}

Header.defaultProps = {
    title: 'The Shoppies'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'oragne',
// }

export default Header
