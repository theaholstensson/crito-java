import React from 'react'

import img_dariapimkina from './../assets/images/daria-pimkina-tYaccl19A3Q-unsplash.jpg'

const AboutCompanySection = () => {
  return (
    <section className="about-company">
      <div className="founder-box">
          <div className="founder-info">
              <h2>Samantha Brown, </h2>
              <h3>Founder</h3>
              <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
          </div>
      </div>
      <div className="founder">
          <img src={img_dariapimkina} alt="A happy woman in a blue shirt walking in an office corridor holding a book and a computer in the left arm" />
      </div>

      <div className="about">
          <h3>About Company</h3>
          <h1>We Are Business Consulting & Credit Repair Experts</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
          <div className="buttons">
              <a className="btn-black" href="about-company.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
              <a className="video-btn-text" href="intro-video"><i className="fa-regular fa-circle-play"></i><span className="btn-video">Intro Video</span></a>
          </div>
      </div>
    </section>
  )
}

export default AboutCompanySection