import React from 'react'

import img_christinawoc1 from './../assets/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg'
import img_itayverchik from './../assets/images/itay-verchik-6ZKGBzrDd3I-unsplash.jpg'
import img_christinawoc2 from './../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg'
import img_theconnected from './../assets/images/the-connected-narrative-N8lRH2uxih4-unsplash.jpg'

const MeetOurTeamSection = () => {
  return (
    <section className="meet-team">
      <div className="container">
          <h3>Meet Our Team</h3>

          <div className="browse">
              <h1>Experience Team Members</h1>
              <a className="btn-transparent" href="team.html" target="blank">Browse Team<i className="fa-regular fa-arrow-up-right"></i></a>
          </div>

          <div className="team">
              <div className="members">
                  <img src={img_christinawoc1} alt="A happy woman with a striped blouse on" />
                  <h2>Kristine Palmer</h2>
                  <p>Chef Operation Officer</p>
              </div>

              <div className="members">
                  <img src={img_itayverchik} alt="A happy man in a suit holding his hands in front of his stomach" />
                  <h2>Max Aubri</h2>
                  <p>Senior Consultant</p>
              </div>

              <div className="members">
                  <img src={img_christinawoc2} alt="A happy woman in a black blouse holding her hands on a book" />
                  <h2>Kimberly Hansen</h2>
                  <p>Senior Consultant</p>
              </div>

              <div className="members">
                  <img src={img_theconnected} alt="a happy man, you can only see from his sholders and up" />
                  <h2>Justin Willoman</h2>
                  <p>Senior Tech Consultant</p>
              </div>
          </div>
          <div className="dots">
              <a href="#"><i className="fa-solid fa-circle"></i></a>
              <a className="active" href="#"><i className="fa-solid fa-circle"></i></a>
              <a href="#"><i className="fa-solid fa-circle"></i></a>
              <a href="#"><i className="fa-solid fa-circle"></i></a>
              <a href="#"><i className="fa-solid fa-circle"></i></a>
          </div>
      </div>
    </section>
  )
}

export default MeetOurTeamSection