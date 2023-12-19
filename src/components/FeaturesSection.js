import React from 'react'

import Button from './generics/Button'
import img_group2 from './../assets/images/Group-2.svg'
import img_group1 from './../assets/images/Group-1.svg'
import img_group3 from './../assets/images/Group-3.svg'
import img_group4 from './../assets/images/Group-4.svg'

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="container">
          <div className="info">
          <h3>Features</h3>
          <h1>Our Accounting is trusted by thousand of companies</h1>
          <Button type="yellow" title="Learn more" url="/learnmore" />
          </div>

          <div className="info-side">
              <div className="content-box">
                  <img src={img_group2} alt="Shaking hands with sparkles around it" />
                  <h2>Business Advice</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <div className="content-box">
                  <img src={img_group1} alt="Lightbulb with a head in it and sparkles around" />
                  <h2>Startup Business</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <div className="content-box">
                  <img src={img_group3} alt="Stocks going upwards with sparkles around it" />
                  <h2>Financial Advice</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <div className="content-box">
                  <img src={img_group4} alt="A 3D box with a gearwheel on the right side and sparkles around it" />
                  <h2>Risk Management</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
          </div>
      </div>
    </section>
  )
}

export default FeaturesSection