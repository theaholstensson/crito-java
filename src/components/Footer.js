import React from 'react'

import img_backgroundlineswhiteright from './../assets/images/background-lines-white-right.svg'
import img_logotypewhite from './../assets/images/logotype-white.svg'


const Footer = () => {
  return (
    <footer>
      <div class="top-menu">
          <img className="background-lines" src={img_backgroundlineswhiteright} alt="White curvy lines" />
          <div class="container">
              <div class="info">
                  <a href="home.html"><img className='logotype-white' src={img_logotypewhite} alt="The logo, a colorful C with a diagonal circle around it, beside it says Crito Consulting Service" /></a>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
              </div>

              <div class="links one">
                  <h2>Company</h2>
                  <a href="#">About</a>
                  <a href="#">Features</a>
                  <a href="#">Works</a>
                  <a href="#">Career</a>
              </div>

              <div class="links two">
                  <h2>Help</h2>
                  <a href="#">Customer Support</a>
                  <a href="#">Delivery Details</a>
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Privacy Policy</a>
              </div>

              <div class="links three">
                  <h2>Resources</h2>
                  <a href="#">Free eBooks</a>
                  <a href="#">Development Tutorial</a>
                  <a href="#">How to - Blog</a>
                  <a href="#">Youtube Playlist</a>
              </div>

              <div class="links four">
                  <h2>Link</h2>
                  <a href="#">Free eBooks</a>
                  <a href="#">Development Tutorial</a>
                  <a href="#">How to - Blog</a>
                  <a href="#">Youtube Playlist</a>
              </div>
          </div>
      </div>

      <div class="bottom-menu">
          <div class="container">
              <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
              <div class="social-media">
                  <a href="https://facebook.com" target="blank"><i class="fa-brands fa-facebook"></i></a>
                  <a href="https://twitter.com" target="blank"><i class="fa-brands fa-x-twitter"></i></a>
                  <a href="https://instagram.com" target="blank"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://linkedin.com" target="blank"><i class="fa-brands fa-linkedin"></i></a>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer