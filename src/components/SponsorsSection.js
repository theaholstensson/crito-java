import React from 'react'

import img_paperz from './../assets/images/paperz.svg'
import img_dorfus from './../assets/images/dorfus.svg'
import img_martino from './../assets/images/martino.svg'
import img_square from './../assets/images/square.svg'
import img_gobona from './../assets/images/gobona.svg'

const SponsorsSection = () => {
  return (
    <section className="sponsors">
        <div className="container">
            <img className='paperz' src={img_paperz} alt="Paperz logo" />
            <img className='dorfus' src={img_dorfus} alt="Dorfus logo" />
            <img className='martino' src={img_martino} alt="Martino logo" />
            <img className='square' src={img_square} alt="Square logo" />
            <img className='gobana' src={img_gobona} alt="Gobana logo" />
        </div>
    </section>
  )
}

export default SponsorsSection