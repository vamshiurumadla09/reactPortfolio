import { React} from 'react';
import { connect } from 'react-redux';
import "../styles/header.css";
import backgroundImage from '../portfolioImages/header-background-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function MainHeader(store) {

  return (
    <div id="header">
      <img className='header-background-image' src={backgroundImage} alt="loading" />
      <nav className='full-nav'>
        <div className='container'>
          <ul className='navbar nav megamenu'>
          <li className='nav-item menu'>
                  <a className='menu-a-tag' href='#header'>home</a>
                </li>
            {store.header.megaMenu.map((menu) => {
              return (
                <li className='nav-item menu'>
                  <a className='menu-a-tag' href={`#${menu}`}>{menu}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
      <div className='container header-summary'>
        <div>
          <span>I am</span>
        <h1>{store.header.name}</h1>
        </div>
        <p className='summary'>{store.header.summary}</p>
        <ul className='social-icons'>
          <li className='icon'>
            <a className='link' href="#header">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className='icon'>
            <a className='link' href="https://www.linkedin.com/in/vamshi-urumadla-ui-developer/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className='icon'>
            <a className='link' href="https://github.com/vamshiurumadla09">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default connect((store) => { return store })(MainHeader)
