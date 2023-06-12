import { React, useState } from 'react';
import { connect } from 'react-redux';
import '../styles/projects.css'

function Projects(store) {
  const [projects, setProjects] = useState([...store.projects]);
  console.log(projects)
  return (
    <div id='projects'>
      <div className='container'>
        <div className='row project-section'>
          <h2>check some of my works</h2>
        </div>
        <div className='row '>
          {
            projects.map((project) => {
              var title= project.title;
              title=title.toLowerCase()
              var sp =title.split(' ');
              var jo = sp.join('')
              console.log(sp);
              console.log(jo);
              return (
                <div className='col-lg-3 projects'>
                  <div className='card project'>
                    <img className='card-img-top w-100' src={project.image} alt="" />
                    <div className='card-body project-body'>
                      <h2 className='card-title'>{project.title}</h2>
                      <p className='card-text'>{project.description}</p>
                      <a href={`/projectdetails/${jo}`}>show</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default connect((store) => { return store })(Projects);