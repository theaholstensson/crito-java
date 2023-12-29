import React from 'react'
import { NavLink } from 'react-router-dom'

import img_backgroundlines from './../assets/images/background-lines.svg'

const Breadcrumb = () => {
  return (
    <section className="breadcrumb">
        <img className='background-lines' src={img_backgroundlines} alt="White curvy lines" />
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        <h1>Let's connect</h1>
    </section>
  )
}

export default Breadcrumb