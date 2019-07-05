import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div id="header">
            <span><Link to="/book" style={{textDecoration:'none',color:"black"}}>BOOKS</Link></span>
        </div>
    )
}

export default Nav