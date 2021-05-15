import React from 'react';
import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import Button from './Button.js'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('clicked')
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='grey' text='Nominated Movies' onClick={onClick}/>
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
