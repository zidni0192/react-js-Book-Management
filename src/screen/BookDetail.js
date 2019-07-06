import React from 'react'
import { Link, Redirect } from 'react-router-dom'


function convert(date) {
  let data = Date.parse(date)
  let newDate = new Date(data)
  let day = newDate.getDate()
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let month = months[newDate.getMonth()]
  var year = newDate.getFullYear();
  return `${day} ${month} ${year}`
}
let data
function BookDetail(props) {
  console.log(props)
  let bookid = props.match.params.bookid
  let Data = props.data.Data
  data = Data.find((item) => item.bookid === bookid)
  console.log(data)
  function deleteData() {
    props.showModalDelete()
  }
  if (!data) {
    console.log("sadnsljnlsandlisnl")
    return (document.location.href = "/book")
  } else {
    return (
      <div className="book-detail">
        <div>
          <ul>
            <li><Link to="/book" className="back">&lArr;</Link></li>
            <li className="button" onClick={props.showModal}>Edit</li>
            <li className="button" onClick={deleteData}>Delete</li>
          </ul>
          <img className={'imageHeader'} src={data.image_url} alt={data.title} />
        </div>
        <div className="content">
          <img className={'imageBook'} src={data.image_url} alt={data.title} />
          <p className="title">{data.title}</p>
          <p className="date">{convert(data.updated_at)}</p>
          <p className="text">{data.description}</p>
        </div>
      </div>
    )
  }
}

export default BookDetail