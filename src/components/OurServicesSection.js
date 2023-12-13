import React from 'react'
import InfoCards from './InfoCards'
import Button from './generics/Button'

import img_backgroundlinesright from './../assets/images/background-lines-right.svg'

const OurServicesSection = () => {
  return (
    <section className="our-services">
      <img className="background-lines" src={img_backgroundlinesright} alt="White curvy lines" />
      <div className="container">
              <h3>Our Services</h3>
              <h1>We Provide The Best Service For Consulting</h1>

          <div className="info-cards">
              
            <InfoCards title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/businessadvice" />
            <InfoCards title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startupbusiness" />
            <InfoCards title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financialadvice" />
            <InfoCards title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagement" />

          </div>
          <div className="bottom">
          <Button type="transparent" title="Browse Services" url="/services" />
          </div>
      </div>
    </section>
  )
}

export default OurServicesSection