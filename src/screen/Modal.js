import React, { Component } from 'react'


const Modal = (props) => {
    console.log(props)
    const showHideClassName = props.show ? "modal display-block" : "modal display-none"
    let action = props.dataAdded ? add : edit
    let dataFind = []
    let dataIndex = ""
    let inputed=""
    if (action === edit) {
        dataFind = props.dataState.Data.find(item => item.bookid === props.match.params.bookid)
        dataIndex = props.dataState.Data.indexOf(dataFind)
    }
    let data = dataFind
    function getData(evt) {
        let nme = evt.target.name
        data[nme] = evt.target.value
        props.editText(evt)
    }
    function add() {
        props.dataAdded(data)
        props.handleClose()
    }
    function edit() {
        props.dataEdited(dataIndex, data)
        props.handleClose()
    }
    function autoID(){
        data['bookid'] = toString(Number(props.dataState.Data[props.dataState.Data.length -1].bookid)+1)
    }
    function setValue(evt){
        props.getEditText(evt)
    }
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button onClick={props.handleClose} className={'close'}>X</button>
                <p>Add Data</p>
                <div>
                    <div className="inputGroup">
                        <div className="label">
                            <p>Url Image</p>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Url Image ..." name="image_url" onChange={getData} value={action === edit ? dataFind.image_url : ""}  />
                        </div>
                    </div>
                    <div className="inputGroup">
                        <div className="label">
                            <p>Title</p>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Title ..." name="title" onChange={getData} value={action === edit ? dataFind.title : ""}/>
                        </div>
                    </div>
                    <div className="inputGroup">
                        <div className="label">
                            <p>Description</p>
                        </div>
                        <div className="input">
                            <textarea placeholder="Description" rows="5" name="description" onChange={getData} value={action === edit ? dataFind.description : ""}></textarea>
                        </div>
                    </div>
                    <div>
                        <button className="save" onClick={action}>Save</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Modal