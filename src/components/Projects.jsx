import { React} from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import '../styles/projects.css';

function Projects(store) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
  return (
    <div id='projects'>
      <div className='container'>
        <div className='row project-section'>
          <h2>check some of my works</h2>
        </div>
        <div className='all-projects' >
        <Slider {...settings}>
                {
                    store.projects.map((project) => {
                        return (
                            <div className='row'>
                                <div className='col-lg-6 col-sm-10 col-xs-10 m-auto projects'>
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
        </div>
      </div>
    </div>
  )
}

export default connect((store) => { return store })(Projects);