import React from 'react'

import Button from './generics/Button'
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
                  <Button type="yellow" title="Subscribe" url="/subscribe" />
              </div>
          </div>
      </div>
    </section>
  )
}

export default SignupSection