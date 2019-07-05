import React from 'react'

function Search(props) {
    return (
        <form>
            <input type="text" id="search" onChange={props.setSearch} placeholder="Search Book ..." />
        </form>
    )
}

export default Search