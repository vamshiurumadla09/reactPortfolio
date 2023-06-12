import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import '../styles/resume.css'

function Resume(store) {
  const [education, setEducation] = useState([...store.resume.education]);
  const [experience, setExperience] = useState({ ...store.resume.experience });
  console.log(education)
  console.log(experience)
  return (
    <div id="resume">
      <div className='container'>
        <div className='row education'>
          <div className='col-lg-4 context'>
            <h2>education</h2>
          </div>
          <div className='col-lg-8 education-details'>
            {education.map((college) => {
              return (
                <ul>
                  <h3>{college.collegeName}</h3>
                  <li>{college.specialization}</li>
                  <li>{college.year}</li>
                </ul>
              )
            })}
          </div>
        </div>
        <div className='row experience'>
          <div className='col-lg-4 context'>
            <h2>experience</h2>
          </div>
          <div className='col-lg-8 education-details'>
            <ul>
              <h3>{experience.companyName}</h3>
              <li>{experience.role}</li>
              <li>{experience.year}</li>
            </ul>
          </div>
        </div>
        <div className='row skills'></div>
      </div>
    </div>
  )
}

export default connect((store) => { return store })(Resume)