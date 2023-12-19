import React from 'react'

import Button from './generics/Button'
import img_adeolu from './../assets/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg'
import img_mareklevak from './../assets/images/marek-levak-zANXcXyByos-unsplash.jpg'
import img_olidale from './../assets/images/oli-dale-xjSkI_seiZY-unsplash.jpg'
import img_carlosmuza from './../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg'

const ProjectCaseSection = () => {
  return (
    <section className="project-case">
      <div className="container">
          <h3>Project & Case Studies</h3>
          <h1>Let's Look At Our Global Projects</h1>

          <div className="grid">
              <div className="content-box grow">
                  <img src={img_adeolu} alt="hands holding a newspaper, the arms are clothed in a suit and the foremost arm has a wristwatch on it" />
                  <h2>Grow your business</h2>
                  <a href="#" target="blank">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
              </div>

              <div className="content-box">
                  <img src={img_mareklevak} alt="Black glasses and a rosegold ipad on the ipad is a rosegold applewatch and a white apple pencil" />
                  <h2>Why your client needs a responsive website</h2>
                  <a href="#" target="blank">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
              </div>

              <div className="content-box grow2">
                  <img src={img_olidale} alt="A white mug, the side of a black laptop, a ruler and a writingblock with a black pencil and a green paperclip and pin on it" />
                  <h2>Educate your employees to get better results</h2>
                  <a href="#" target="blank">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
              </div>

              <div className="content-box">
                  <img src={img_carlosmuza} alt="A silver macbook displaying a stockmarket" />
                  <h2>Better Insights is an important piece of your business</h2>
                  <a href="#" target="blank">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
              </div>
          </div>

      </div>

      <Button type="black" title="All Recent Projects" url="/recentprojects" />
    </section>
  )
}

export default ProjectCaseSection