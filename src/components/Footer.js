import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import img_backgroundlineswhiteright from './../assets/images/background-lines-white-right.svg'
import img_logotypewhite from './../assets/images/logotype-white.svg'


const Footer = () => {
  return (
    <footer>
      <div className="top-menu">
          <img className="background-lines" src={img_backgroundlineswhiteright} alt="White curvy lines" />
          <div className="container">
              <div className="info">
                  <NavLink to="/"><img className='logotype-white' src={img_logotypewhite} alt="The logo, a colorful C with a diagonal circle around it, beside it says Crito Consulting Service" /></NavLink>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
              </div>

              <div className="links one">
                  <h2>Company</h2>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/features">Features</NavLink>
                  <NavLink to="/works">Works</NavLink>
                  <NavLink to="/career">Career</NavLink>
              </div>

              <div className="links two">
                  <h2>Help</h2>
                  <NavLink to="/CostumerSupport">Customer Support</NavLink>
                  <NavLink to="/DeliveryDetails">Delivery Details</NavLink>
                  <NavLink to="/TermsConditions">Terms & Conditions</NavLink>
                  <NavLink to="/PrivacyPolicy">Privacy Policy</NavLink>
              </div>

              <div className="links three">
                  <h2>Resources</h2>
                  <a href="*">Free eBooks</a>
                  <a href="*">Development Tutorial</a>
                  <a href="*">How to - Blog</a>
                  <a href="*">Youtube Playlist</a>
              </div>

              <div className="links four">
                  <h2>Link</h2>
                  <a href="*">Free eBooks</a>
                  <a href="*">Development Tutorial</a>
                  <a href="*">How to - Blog</a>
                  <a href="*">Youtube Playlist</a>
              </div>
          </div>
      </div>

      <div className="bottom-menu">
          <div className="container">
              <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
              <div className="social-media">
                  <a href="https://facebook.com" target="blank"><i className="fa-brands fa-facebook"></i></a>
                  <a href="https://twitter.com" target="blank"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="https://instagram.com" target="blank"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://linkedin.com" target="blank"><i className="fa-brands fa-linkedin"></i></a>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer