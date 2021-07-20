import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
function Search() {
    return (
        <>
          <div className="search-container mt-4">
              <div className="search-field">
                  <div className="search-phase">
                  <h3>Find your home</h3>
                  </div>
                  <div className="search-input">
                  <input type="text" placeholder="search your home"/>
                  <SearchIcon/>
                  </div>
                  <div className="filter">
                      Filter by Province:{''}
                      <select className="select">
                          <option>Westarn Cap</option>
                          <option>Eastern Cap</option>
                          <option>Northen Cap</option>
                          <option>Asian Cap</option>
                          <option>American Cap</option>
                          <option>Europian Cap</option>
                      </select>
                  </div>
                  
              </div>
              
         </div>  
        </>
    )
}

export default Search
