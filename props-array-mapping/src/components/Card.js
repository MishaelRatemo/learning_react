import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <img src={`../images/${props.image}`}  className='locator' alt="" />
        <div className="cardcontent">
            <section>
                <img src="" className='' alt="" />
                <p>{props.location}, {props.country}</p>
                <link className='view_map' rel="stylesheet" href="" />
            </section>
            <h1 className='place'>{props.title}</h1>
            <h4 className='dates'>{props.startDate}- {props.endDate}</h4>
            <p className='description'>{props.description}</p>
        </div>        
    </div>
  )
}

export default Card