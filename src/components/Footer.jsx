import { React, useState } from 'react'
import '../styles/footer.css'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
function Footer(store) {
  return (
    <div id='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-3'>
          <ul className='f-social-icons'>
            <li className='icon'>
              <a className='link' href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className='icon'>
              <a className='link' href="https://www.linkedin.com/in/vamshi-urumadla-ui-developer/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className='icon'>
              <a className='link' href="">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          </div>
          <div className='col-lg-3 f-description'>
            <div>
            <h4>thanks for visting my site</h4>
            </div>
          </div>
          <div className='col-lg-3 center'>
          <div className='back-to-top-broder'>
              <a className='back-to-top' href="#header">
                <FontAwesomeIcon icon={faArrowUp} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect((store) => { return store })(Footer);