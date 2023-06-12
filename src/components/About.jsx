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
                        <p>Salesforce Certified commerce cloud developer with over 1 year of experience in developing and customizing eCommerce solutions. Proficient in Salesforce Commerce Cloud. Worked on designing and developing responsive and user-friendly storefronts using SFRA (Storefront Reference Architecture). Developed multiple components for different pages using page designer and skilled in analyzing requirements, designing, developing, and maintaining web applications. For development, utilized Agile-Scrum methodology.</p>
                    </div>
                    <div className='row about-description'>
                        <h2>contact</h2>
                        <ul>
                            <li>vamshi</li>
                            <li>india</li>
                            <li>urumadlavamshi09@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About