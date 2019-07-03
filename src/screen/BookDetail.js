import React, { Component } from 'react'
import Data from '../data'
import {Link} from 'react-router-dom'
function BookDetail(props) {
  let bookid = props.match.params.bookid
  let data = Data.find((item)=>item.bookid === bookid)
  return (
    <div className="book-detail">
      <div>
        <ul>
          <li><Link to="">Edit</Link></li>
          <li><Link to="">Delete</Link></li>
        </ul>
        <img src={data.image_url} alt={data.title}/>
      </div>
      <div className="content">
      <p className="title">{data.title}</p>
      <p className="date">{data.updated_at}</p>
      </div>
    </div>
  )
}

export default BookDetail