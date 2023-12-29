import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import Button from './generics/Button'
import img_logotype from './../assets/images/logotype.svg'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [btnClasses, setBtnClasses] = useState('btn-menu')

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setBtnClasses(!showMenu ? 'btn-menu active' : 'btn-menu')
    }

  return (
    <header>
        <div className="container">
            <Link to="/"><img className='logotype' src={img_logotype} alt="The logo, a colorful C with a diagonal circle around it, beside it says Crito Agency Service" /></Link>
            <button className={btnClasses} onClick={toggleMenu} ><i className="fa-solid fa-bars-staggered"></i></button>

            {showMenu && (
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/news">News</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            )}

            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="contact-box">
                            <i className="fa-regular fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="contact-box">
                            <i className="fa-regular fa-envelope"></i>
                            info@crito.com
                        </div>
                        <div className="contact-box last">
                            <i className="fa-regular fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https://facebook.com" target="blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com" target="blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://instagram.com" target="blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="main-menu">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                    <Button type="yellow" title="Login" url="/login" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header