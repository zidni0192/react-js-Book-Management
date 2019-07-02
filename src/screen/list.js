import React, { Component } from 'react'

class list extends Component {
    render() {
        return (
            <div className="list">
                <button className="add">ADD</button>
                <div className="list-item">
                    <div className="item">
                        <img src="http://4.bp.blogspot.com/-dc4-vnkpvDg/Vj5wcqVMOGI/AAAAAAAAAPk/FuH-zjU3pR8/s1600/covernya.jpg" alt="gambar" />
                        <p>DILAN 1991</p>
                    </div>
                    <div className="item">
                        <img src="https://media.karousell.com/media/photos/products/2018/11/04/sebuah_seni_untuk_bersikap_bodo_amat_by_mark_manson_1541315552_3bd8ff59.jpg" alt="gambar" />
                        <p>SEBUAH SENI UNTUK BERSIKAP BODOAMAT</p>
                    </div>
                    <div className="item">
                        <img src="http://4.bp.blogspot.com/-dc4-vnkpvDg/Vj5wcqVMOGI/AAAAAAAAAPk/FuH-zjU3pR8/s1600/covernya.jpg" alt="gambar" />
                        <p>React Native</p>
                    </div>
                    <div className="item">
                        <img src="http://4.bp.blogspot.com/-dc4-vnkpvDg/Vj5wcqVMOGI/AAAAAAAAAPk/FuH-zjU3pR8/s1600/covernya.jpg" alt="gambar" />
                        <p>JavaScript Uncover</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default list