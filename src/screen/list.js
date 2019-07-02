import React from 'react'

function text(text) {
    if (text.length > 20) {
        let textSplit = text.substr(0, 20)
        return `${textSplit} ...`
    } else {
        let textSplit = text
        return `${textSplit}`
    }
}

function list(prop) {
    let data = prop.data
    return (
        <div className="list">
            <button className="add">ADD</button>
            <div className="list-item">
                {
                    data.map(
                        item => {
                            return (
                                <div className="item">
                                    <img src={item.image_url} alt="gambar" />
                                    <div>
                                        <p>{text(item.title)}</p>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}


export default list