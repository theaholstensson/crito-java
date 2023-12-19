import React from 'react'

import Button from './generics/Button'
import img_vinceveras from './../assets/images/vince-veras-AJIqZDAUD7A-unsplash.jpg'
import img_christinawoc3 from './../assets/images/christina-wocintechchat-com-PlikkWB79qs-unsplash.jpg'
import img_josephgonzales from './../assets/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'

const Testimonial = () => {
  return (
    <section class="testimonial">
      <div class="white-box">
          <div class="container">
              <h3>Testimonial</h3>
              <h1>What Our Clients Says</h1>

              <div class="reviews">
                  <div class="client first">
                      <div class="stars">
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                      <div class="parent">
                          <img src={img_vinceveras} alt="A smiling woman with dark hair in a striped shirt standing in front of green nature" />
                          <div class="child">
                              <h2>Cassandra Warren</h2>
                              <h4>Business Manager, Dorfus</h4>
                          </div>
                      </div>
                  </div>

                  <div class="client">
                      <div class="stars">
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                      <div class="parent">
                          <img src={img_christinawoc3} alt="A smiling woman with brown hair in a beige blouse holding her hands on a chair" />
                          <div class="child">
                              <h2>Amanda Tulling</h2>
                              <h4>Senior Developer, Square</h4>
                          </div>
                      </div>
                  </div>

                  <div class="client last">
                      <div class="stars">
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                      <div class="parent">
                          <img src={img_josephgonzales} alt="A happy man in a white t-shirt, shoulders and up, in front of a white marble background" />
                          <div class="child">
                              <h2>Jack McDogglas</h2>
                              <h4>Key Account Manager, Gobona</h4>
                          </div>
                      </div>
                  </div>
              </div>

              <Button type="black" title="All Reviews" url="/allreviews" />

            </div>
      </div>
    </section>
  )
}

export default Testimonial