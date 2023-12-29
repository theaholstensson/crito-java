import React from 'react'
import { Link } from 'react-router-dom'

const InfoCards = ({title, description, url}) => {
  return (
    <div className="cards">
        <div className="line"></div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="btn-arrow" to={url} target="blank"><i className="fa-regular fa-arrow-right"></i></Link>
    </div>
  )
}

export default InfoCards