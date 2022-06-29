import React from 'react'
import './Info.css'
import myimage from '../images/Mish.jpg'

function Info() {
    return (
        <div className='info'>
            <img className='myimage' src={myimage} alt="myimage" />
            <div className="lower">
                <h1 className='name'>Mishael Ratemo</h1>
                <p className='stack'>FullStack Developer</p>
                <small>ratemishael@gmail.com</small>
                <div className="buttons">
                    <button className='btn mail' type="button" value="Email" > Email</button>
                    <button className='btn linkedin' type="button" value="LinkedIn" >Linkedin</button>
                </div>
            </div>
        </div>
    )
}

export default Info