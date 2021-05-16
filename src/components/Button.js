import React from 'react'

const Button = ({ color, text, onClick, movie }) => {
    
    return (
        <button 
            onClick={() => onClick(movie)}
            style={{ backgroundColor: color }} 
            className='btn'
            >
            {text}
        </button>
    )
}

export default Button
