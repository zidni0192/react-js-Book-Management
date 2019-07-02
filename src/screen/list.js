import React from 'react'
import Item from './item'
function list(prop) {
    let data = prop.data
    return (
        <div className="list">
            <button className="add">ADD</button>
            <div className="list-item">
                <Item data={data} />
                
            </div>
        </div>
    )
}


export default list