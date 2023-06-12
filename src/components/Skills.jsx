import { React, useState } from 'react';
import '../styles/skills.css';
import { connect } from 'react-redux';

function Skills(store) {
    console.log(store)
    const [frontend, setFrontend] = useState([...store.skills.frontend]);
    const [backend, setBackend] = useState([...store.skills.backend]);
    const [sfcc, setSfcc] = useState([...store.skills.sfcc]);
    console.log(frontend);
    return (
        <div id="skills">
            <div className='container'>
                <div className='row'>
                    <div className='skill-title'>
                        <h1>Skills</h1>
                        <span>my technical level</span>
                    </div>
                </div>
                <div className='row accordion' id='skillAccordian'>
                    <div className='col-lg-6'>
                        <div className='row'>
                            <div className='col-lg-10 skill'>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="skill0">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            frontend
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="skill0" data-bs-parent="#skillAccordian">
                                        <div class="accordion-body">
                                            <ul>
                                                {
                                                    frontend.map((skill) => {
                                                        return (
                                                            <li className='skill-scale'>
                                                                <div className='row'>
                                                                    <div className='d-flex justify-content-between'>
                                                                        <div className='name'>{skill.name}</div>
                                                                        <div className='percentage'>{skill.percentage}</div>
                                                                    </div>
                                                                </div>
                                                                <div className='row justify-content-around'>
                                                                    <div className='scale'>
                                                                        <div className={`w-${skill.percentage}`}>.</div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-10 skill'>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="skillTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                            backend
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="skillTwo" data-bs-parent="#skillAccordian">
                                        <div class="accordion-body">
                                            <ul>
                                                {
                                                    backend.map((skill) => {
                                                        return (
                                                            <li className='skill-scale'>
                                                                <div className='row'>
                                                                    <div className='d-flex justify-content-between'>
                                                                        <div className='name'>{skill.name}</div>
                                                                        <div className='percentage'>{skill.percentage}</div>
                                                                    </div>
                                                                </div>
                                                                <div className='row justify-content-around'>
                                                                    <div className='scale'>
                                                                        <div className={`w-${skill.percentage}`}>.</div>
                                                                    </div>
                                                                </div>

                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='row'>
                            <div className='col-lg-10 skill'>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="skillThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                                            salesforce commerce cloud
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="skillThree" data-bs-parent="#skillAccordian">
                                        <div class="accordion-body">
                                            <ul>
                                                {
                                                    sfcc.map((skill) => {
                                                        return (
                                                            <li className='skill-scale'>
                                                                <div className='row'>
                                                                    <div className='d-flex justify-content-between'>
                                                                        <div className='name'>{skill.name}</div>
                                                                        <div className='percentage'>{skill.percentage}</div>
                                                                    </div>
                                                                </div>
                                                                <div className='row justify-content-around'>
                                                                    <div className='scale'>
                                                                        <div className={`w-${skill.percentage}`}>.</div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-10 skill'>
                                <div className='resume-download'>
                                    <span>downlad the resume</span>
                                    <button class="btn btn-success">Download</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect((store) => { return store })(Skills)