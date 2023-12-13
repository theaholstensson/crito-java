import React from 'react'

const InfoCards = ({title, description, url}) => {
  return (
    <div className="cards">
        <div className="line"></div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a className="btn-arrow" href={url} target="blank"><i className="fa-regular fa-arrow-right"></i></a>
    </div>
  )
}

export default InfoCards