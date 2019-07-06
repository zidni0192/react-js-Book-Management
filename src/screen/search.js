import React from 'react'

function Search(props) {
    function search() {
        props.setSearch(document.getElementById('search').value)
    }
    return (
        <input type="text" id="search" onKeyUp={search} placeholder="Search Book ... " />
    )
}

export default Search