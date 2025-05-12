import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(query);
        }
    };

    const handleButtonClick = () => {
        onSearch(query);
    };

    return (
        <div className='searchBar'>
            <input 
                type="text"
                placeholder="Search for papers..."
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress} 
            />

            <button onClick={handleButtonClick}>SEARCH</button>
                
        </div>
    );
};

export default SearchBar;