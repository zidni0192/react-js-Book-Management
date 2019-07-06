import React from 'react'
import { Link } from 'react-router-dom'

function ModalDelete(props) {
    console.log(props)
    const showHideClassName = props.modalDelete ? "modal display-block" : "modal display-none"
    let bookid = props.match.params.bookid
    let Data = props.data.Data
    let data = Data.find((item) => item.bookid === bookid)
    function deleteData() {
        let dataIndex = Data.indexOf(data)
        props.deleteData(dataIndex)
        props.hideModalDelete()
    }
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div>
                    <div className="inputGroup">
                        <p className="confirmation"> {`"${data.title}"`} Has been deleted</p>
                        <img src={'https://3.bp.blogspot.com/-AG4Mi-Cyk1g/XJOwJXyb3_I/AAAAAAAAALY/6K-fNN5poyAp4Bmg-a49ZOT6M0Zry7BigCLcBGAs/s1600/IMG-20190321-WA0016.jpg'} alt={"Gambar"} style={{ width: '300px', marginLeft: '50%', transform: 'translate(-50%)' }}></img>
                    </div>
                    <div>
                        <Link to={'/'}><button className="delete" onClick={deleteData} style={{ marginRight: "10px" }}>Ok</button></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ModalDelete