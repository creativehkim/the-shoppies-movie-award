import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBox = (props) => {
    return (
        <div className='search'>
            
                <BsSearch className='search-icon'/>
                <input 
                    type="text" 
                    name='search'
                    placeholder='Type to search...' 
                    value={props.searchValue}
                    onChange={props.onChange}
                />

        </div>
    )
}

export default SearchBox
