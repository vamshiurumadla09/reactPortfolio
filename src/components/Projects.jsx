import { React} from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import '../styles/projects.css';

function Projects(store) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};
  return (
    <div id='projects'>
      <div className=''>
        <div className='row project-section'>
          <h2>check some of my works</h2>
        </div>
        <div className='all-projects' >
        <Slider {...settings} className='d-none d-lg-block d-md-block'>
                {
                    store.projects.map((project) => {
                        return (
                            <div className='row'>
                                <div className='projects'>
                                    <a href={project.link}>
                                        <div className='card project'>
                                            <img className='card-img-top w-100' src={project.image} alt="" />
                                            <div className='card-body project-body'>
                                                <h2 className='card-title'>{project.title}</h2>
                                                <p className='card-text'>{project.description}</p>
                                                <a href={project.link}>show</a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        )
                    })
                }
            </Slider>
            <div className='d-sm-none'>
            {
                    store.projects.map((project) => {
                        return (
                            <div className='row'>
                                <div className='projects'>
                                    <a href={project.link}>
                                        <div className='card project'>
                                            <img className='card-img-top w-100' src={project.image} alt="" />
                                            <div className='card-body project-body'>
                                                <h2 className='card-title'>{project.title}</h2>
                                                <p className='card-text'>{project.description}</p>
                                                <a href={project.link}>show</a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default connect((store) => { return store })(Projects);