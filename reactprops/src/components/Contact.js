import React from 'react'
// import avt1 from '../images/avt1.png'

function Contact({img,name,phone,email}) {
    return (
        <div className='contacts'>
            <div className="card">
                <img src={ img} alt="" />
                <h3>{ name}</h3>
                <div className="info-group">
                    <h2>&#9742;</h2>
                    <p>{ phone}</p>
                </div>
                <div className="info-group">
                    <h2>&#128231;</h2>
                    <p>{ email}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact