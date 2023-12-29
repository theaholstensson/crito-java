import React from 'react'

import img_process from './../assets/images/process.svg'
import img_strategic from './../assets/images/strategic.svg'
import img_experience from './../assets/images/experience.svg'
import img_ai from './../assets/images/ai.svg'
import img_amyhirschi from './../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us">
      <div className="background-box"></div>

      <div className="container">
          <div className="why">
              <h3>Why Choose Us</h3>
              <h1>Why We Are The Best Business Consulting Agency</h1>

              <div className="icon">
                  <img src={img_process} alt="A thumbs up with sparkles around it" />
                    <div className="text">
                    <h2>Process Excellence</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
              </div>

              <div className="icon">
                  <img src={img_strategic} alt="A romb" />
                    <div className="text">
                    <h2>Strategic Planning</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
              </div>

              <div className="icon">
                  <img src={img_experience} alt="A bezier curve/vector" />
                    <div className="text">
                    <h2>Experience Design</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
              </div>

              <div className="icon">
                  <img src={img_ai} alt="a head in profile with a cogwheel inside" />
                    <div className="text">
                    <h2>Artificial Intelligence</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
              </div>
          </div>
          
          <div className="picture">
              <img src={img_amyhirschi} alt="Two women in front of a brick wall, sitting in leather chairs behind a tree table discussing about something showing on the ipad which one of the women is holding" />
          </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection