import React from 'react';
import MainHeader from './MainHeader';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skills';


function HomePage() {
  return (
    <div>
        <MainHeader></MainHeader>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default HomePage