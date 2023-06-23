import React from 'react';
import backgroundImg from '../portfolioImages/contactBg2.jpg';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div id='contact'>
      <div className='contact-bg'>
        <img src={backgroundImg} alt="loading" />
        <div className='container'>
          <div className='row contact-body'>
            <div className='col-lg-6'>
              <div className='contact-details'>
                <h2>Contact us</h2>
                <div>
                  <ul className='full-details'>
                    <li className='details'>
                      <div className='detail'>
                        <h4>
                          <span>
                          <FontAwesomeIcon icon={faPhone} />
                          </span>
                          <span>call</span>
                        </h4>
                        <span>9963186819</span>
                      </div>
                    </li>
                    <li className='details'>
                      <div className='detail'>
                        <h4>
                          <span><FontAwesomeIcon icon={faEnvelope} /></span>
                          <span>email</span>
                        </h4>
                        <span>urumadlavamshi09@gmail.com</span>
                      </div>
                    </li>
                    <li className='details'>
                      <div className='detail'>
                        <h4>
                          <span><FontAwesomeIcon icon={faLinkedin} /></span>
                          <span>linked</span></h4>
                        <a href='https://www.linkedin.com/in/vamshi-urumadla-ui-developer/'>vamshiurumadla</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='card contact-form'>
                <div className='card-body'>
                  <form className='form' action="">
                  <div>
                      <label For="email">Email</label>
                      <input id="email" type="text" />
                    </div>
                    <div>
                      <label For="name">Name</label>
                      <input id="name" type="text" />
                    </div>
                    <div>
                      <label For="contactno">contact</label>
                      <input id="contactno" type="text" />
                    </div>
                    <div>
                      <label For="context">context</label>
                      <input id="context" type="text" />
                    </div>
                    <button>submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact