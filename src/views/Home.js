import React from 'react'

import Header from '../components/Header';
import ShowcaseSection from '../components/ShowcaseSection';
import SponsorsSection from '../components/SponsorsSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutCompanySection from '../components/AboutCompanySection';
import OurServicesSection from '../components/OurServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ProjectCaseSection from '../components/ProjectCaseSection';
import MeetOurTeamSection from '../components/MeetOurTeamSection';
import TestimonialSection from '../components/Testimonial';
import ArticleNewsSection from '../components/ArticleNewsSection';
import SignupSection from '../components/SignupSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='wrapper'>
        <Header />
        <main>
            <ShowcaseSection />
            <SponsorsSection />
            <FeaturesSection />
            <AboutCompanySection />
            <OurServicesSection />
            <WhyChooseUsSection />
            <ProjectCaseSection />
            <MeetOurTeamSection />
            <TestimonialSection />
            <ArticleNewsSection />
            <SignupSection />
        </main>
        <Footer />
    </div>
  )
}

export default Home