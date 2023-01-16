import React, { useState, useEffect } from 'react';
import './SearchPosts.css';

const SearchPosts = (props) => {
    const [ searchText, setSearchText ] = useState("");

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
       props.onSearch(searchText);
    }, [searchText]);

  return (
      <div className='search-posts'>
          <form>
              <input onChange={handleChange} type="text" value={searchText} placeholder='Search Post...' />
          </form>
    </div>
  )
}

export default SearchPosts