import React from 'react'

function Search(props) {
    function search(evt) {
        if (evt.keyCode === 13) {
            props.setSearch(document.getElementById('search').value)
        }
    }
    function key(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) { 
          e.preventDefault();
          return false;
        }
    }
    return (
        <form onKeyPress={key}>
            <input type="text" id="search" onKeyUp={search} placeholder="Search Book ..." />
        </form>
    )
}

export default Search