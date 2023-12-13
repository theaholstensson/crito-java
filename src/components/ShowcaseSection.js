import React from 'react'

import img_showcaseimage from './../assets/images/showcase-image.svg'
import img_backgroundlines from './../assets/images/background-lines.svg'

const ShowcaseSection = () => {
  return (
    <section className="showcase">
      <img className="background-lines" src={img_backgroundlines} alt="White curvy lines" />
      <div className="container">

          <div className="content">
              <h1>We provide The Best business solutions</h1>
              <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
              <a className="btn-yellow" href="consulting.html">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></a>
              <a className="btn-transparent" href="services.html">Learn more<i className="fa-regular fa-arrow-up-right"></i></a>
          </div>

          <img className="showcase-image" src={img_showcaseimage} alt="A thinking man in a suit with a tablet" />
      </div>
    </section>
  )
}

export default ShowcaseSection