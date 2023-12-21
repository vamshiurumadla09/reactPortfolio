import React from 'react';
import profilePic from '../portfolioImages/profile-pic.png';
import "../styles/about.css"

function About() {
  return (
    <div id='about'>
        <div className='container'>
            <div className='row about-section'>
                <div className='col-lg-4 profile'>
                    <img className='w-100' src={profilePic} alt="" />
                </div>
                <div className='col-lg-8 about'>
                    <div className='row about-description'>
                        <h2>About</h2>
                        <p>Software developer with over 1 year of experience in developing and customizing eCommerce solutions. Worked on multiple Projects as frontend developer. Developer responsive web applications using Html, CSS, javascript, Jquery, Bootstrap, sass. I aslo Collaborated with cross-functional teams to deliver responsive and user-friendly web applications. collaborated with UX/UI designers to coding and implementation. Experienced with working on Figma and XD designs. Developed multiple components for different pages using page designer and skilled in analyzing requirements, designing, developing, and maintaining web applications.</p>
                    </div>
                    <div className='row about-description'>
                        <h2>contact</h2>
                        <ul>
                            <li>+91 9963186819</li>
                            <li>urumadlavamshi09@gmail.com</li>
                            <li>hyderbad, india</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About