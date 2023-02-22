import React from 'react'

const SearchBox = ({searchField, searchChange}) => {


  return (
    <div className="pa2">
        <input type="search" placeholder="Search robots..." className="bg-lightest-blue b--green pa3" onChange={searchChange}/>
    </div>
  )
}

export default SearchBox
