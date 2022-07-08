import React from 'react'
import Footer from '../Footer/footer';
import DBLayout from '../layouts/DBLayout';
import Cta from '../nav/cta';
import FormSection from '../nav/formSection';
import Hero from '../nav/hero';
import NavBar from '../nav/navbar';
import SectionOne from '../nav/sectionOne';
import SectionTwo from '../nav/sectionTwo';

const LandingPage = () => {
  return (
    <>
    <DBLayout>
        <NavBar />
        <Hero />
        <SectionOne />
        <SectionTwo />
        <FormSection />
        <Cta />
    </DBLayout>
    <Footer />
    </>
  )
}

export default LandingPage;
