import React from 'react'

function Search(props) {
    function search(evt) {
        if (evt.keyCode === 13) {
            props.setSearch(document.getElementById('search').value)
        }
    }
    return (
        <input type="text" id="search" onKeyUp={search} placeholder="Search Book ... (Press Enter To Search)" />
    )
}

export default Search