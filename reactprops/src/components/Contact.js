import React from 'react'
// import avt1 from '../images/avt1.png'

function Contact(props) {
    return (
        <div className='contacts'>
            <div className="card">
                <img src={props.img} alt="" />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <h2>&#9742;</h2>
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <h2>&#128231;</h2>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact