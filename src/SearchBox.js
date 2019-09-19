import React from 'react';
import './SearchBox.css'

const SearchBox = ( props ) => {
    const onSearchChange = (evt) => {
        props.handleSearch(evt.target.value);
    }
    return(
        <div className="SearchBox">
            <input type="text" name="search" onChange={onSearchChange} placeholder="Search"></input>
        </div>
    );
}

export default SearchBox;