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
    let dataMap = prop.Data.find(a => a.title === search)
    let data = search !== '' ? dataMap : prop.Data
    console.log(data)
    return (
        <div className="list">
            <button className="add" onClick={showModal}>ADD</button>
            <div className="list-item">
                {
                    search === '' ?
                        data.map(
                            item => {
                                return (
                                    <Link to={`/book/${item.bookid}`}>
                                        <div className="item" id="items" bookid={item.bookid}>
                                            <img src={item.image_url} alt="gambar" />
                                            <div>
                                                <p>{text(item.title)}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        )
                        : data !== undefined ?
                        <Link to={`/book/${data.bookid}`}>
                            <div className="item" id="items" bookid={data.bookid}>
                                <img src={data.image_url} alt="gambar" />
                                <div>
                                    <p>{text(data.title)}</p>
                                </div>
                            </div>
                        </Link>
                        :{}
                }
            </div>
        </div>
    )
}


export default list