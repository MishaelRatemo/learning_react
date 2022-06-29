import React from 'react'
import './Info.css'
import myimage from '../images/Mish.jpg'

function Info() {
    return (
        <div className='info'>
            <img className='myimage' src={myimage} alt="myimage" />
            <div className="lower">
                <h1>Mishael Ratemo</h1>
                <p>FullStack Developer</p>
                <div className="buttons">
                    <input type="button" value="Email" />
                    <input type="button" value="LinkedIn" />
                </div>
            </div>
        </div>
    )
}

export default Info