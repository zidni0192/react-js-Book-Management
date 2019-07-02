import React from 'react'

function text(text) {

    if(text.length > 20){
        let textSplit = text.substr(0, 20)
        return `${textSplit} ...`    
    }else{
        let textSplit = text
        return `${textSplit}`    
    }
}

function Item(prop) {
    let data = prop.data
    return (
        data.map(
            item => {
                return (
                    <div className="item">
                        <img src={item.image_url} alt="gambar" />
                        <p>{text(item.title)}</p>
                    </div>
                )
            }
        )
    )
}
export default Item