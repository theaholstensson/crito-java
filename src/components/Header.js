import React from 'react'

import img_logotype from './../assets/images/logotype.svg'

const Header = () => {
  return (
    <header>
        <div className="container">
            <a href="home.html"><img className='logotype' src={img_logotype} alt="The logo, a colorful C with a diagonal circle around it, beside it says Crito Agency Service" /></a>
            <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
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
                        <a className="active" href="home.html">Home</a>
                        <a href="service.html">Service</a>
                        <a href="news.html">News</a>
                        <a href="contact.html">Contact</a>
                    </nav>
                    <a className="btn-yellow" href="login.html">Login <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header