import React from 'react'
import { Link } from 'react-router-dom'

function text(text) {
    if (text.length > 20) {
        let textSplit = text.substr(0, 20)
        return `${textSplit} ...`
    } else {
        let textSplit = text
        return `${textSplit}`
    }
}
function list({ prop, search, showModal }) {
    let dataMap
    if (search !== '') {

        dataMap = prop.Data.filter(item => item.title.toLowerCase().indexOf(search.toLowerCase()) > -1)
    }
    let data = search !== '' ? dataMap : prop.Data
    return (
        <div className="list">
            <button className="add" onClick={showModal}>ADD</button>
            <div className="list-item">
                {

                    data.map(
                        item => {
                            return (
                                <Link to={`/book/${item.bookid}`}>
                                    <div className="item" id="items" bookid={item.bookid}>
                                        <img src={item.image_url} alt="gambar" />
                                        <div>
                                            {console.log(item)}
                                            <p>{text(item.title)}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    )

                }
            </div>
        </div>
    )
}


export default list