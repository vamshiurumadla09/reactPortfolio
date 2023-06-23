import { React, useState } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import '../../styles/projects.css'

function SlickCarousel(store) {
    const [projects, setProjects] = useState([...store.projects]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div>
            <h2>Slick Carousel Example</h2>
            <Slider {...settings}>
                {
                    projects.map((project) => {
                        return (
                            <div>
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
        </div>
    )
}

export default connect((store) => { return store })(SlickCarousel);