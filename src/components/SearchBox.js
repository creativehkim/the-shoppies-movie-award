import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBox = (props) => {
    return (
        <div>
            <BsSearch />
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
