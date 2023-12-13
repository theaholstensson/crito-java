import React from 'react'

import img_backgroundwavylines from './../assets/images/background-wavy-lines.svg'

const SignupSection = () => {
  return (
    <section className="signup">
      <img className="background-lines" src={img_backgroundwavylines} alt="Gray wavy lines" />
      <div className="container">
          <div className="column">
              <h1>Get News Updates By Signup</h1>
              <div className="subscribe">
                  <input type="text" placeholder="username@domain.com" />
                  <a className="btn-yellow" href="#">Subscribe<i class="fa-regular fa-arrow-up-right"></i></a>
              </div>
          </div>
      </div>
    </section>
  )
}

export default SignupSection