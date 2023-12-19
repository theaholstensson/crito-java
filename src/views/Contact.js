import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ContactSection from '../components/ContactSection'
import MessageSection from '../components/MessageSection'
import MapSection from '../components/MapSection'

const Contact = () => {
  return (
    <div className='wrapper'>
        <Header />
        <main>
            <Breadcrumb />
            <ContactSection />
            <MessageSection />
            <MapSection />
        </main>
        <Footer />

    </div>
  )
}

export default Contact