import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import project1 from '../assets/ProjectsPage/project1.png';

class ProjectsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div>
                {<PageHeader/>}
                <header class="home-header projects-header">
                    <div class="home-header__text-box">
                        <h1 class="heading-primary">
                            <span class="heading-primary--main">Our Projects</span>
                        </h1>
                    </div>
                </header>
                <div className="section-header section-green">
                        <h2 class="heading-secondary">
                            Internal Team Projects
                        </h2>
                        <p>The Internal Team leads education driven initiatives within the NUS community in hopes of making technology accessible to all.</p>
                    </div>
                <section className="section">

                    <div className="projects">
                        <div className="card-horizontal projects__project">
                            <div className="card-horizontal__image-box">
                                <img src={project1} alt="event"/>
                            </div>
                            <div className="card-horizontal__content">
                                <h2 class="heading-secondary">
                                    Educational Workshops
                                </h2>
                                <p>In this academic year, DSC NUS will be running 2 main workshops: Web Development and Data Analytics. These workshops are targeted at beginners who have little coding background and they would be guided by experienced individuals throughout the process</p>
                                <br></br>
                                <p>More details coming soon!</p>
                            </div>
                        </div>
                        <div className="card-horizontal projects__project">
                            <div className="card-horizontal__image-box">
                                <img src={project1} alt="event"/>
                            </div>
                            <div className="card-horizontal__content">
                                <h2 class="heading-secondary">
                                    Hack For Good
                                </h2>
                                <p>Hack For Good is a hackathon organised by the Internal Team to bring teams around Singapore together to brainstorm and implement ideas for the greater social good.</p>
                                <br></br>
                                <p>More details coming soon!</p>
                            </div>
                        </div>
                    </div>
                </section>
                    
                <div className="section-header section-red">
                        <h2 class="heading-secondary">
                            External Team Projects
                        </h2>
                        <p>The External Team leads community based projects in different sectors in hopes to benefit them in the long run.</p>
                </div>
                <div className="projects">
                    <div className="card-horizontal projects__project">
                        <div className="card-horizontal__image-box">
                            <img src={project1} alt="event"/>
                        </div>
                        <div className="card-horizontal__content">
                            <h2 class="heading-secondary">
                                Team A
                            </h2>
                            <p>DSC NUS is an inclusive community, nurturing learners of technology to engage and impact communities</p>
                            <ul className="projects__list">
                                <span className="flex">
                                    <Icon name='angle right' link size='small' className="projects__list-icon"/> 
                                    <li className="projects__list-item">Enhance learning for kids with autism</li>
                                </span>
                                <span className="flex">
                                    <Icon name='angle right' link size='small' className="projects__list-icon"/> 
                                    <li className="projects__list-item">Tackle food wastage in NUS Residential Colleges/Halls </li>
                                </span>
                                <span className="flex">
                                    <Icon name='angle right' link size='small' className="projects__list-icon"/> 
                                    <li className="projects__list-item">Enhance eye-test procedures</li>
                                </span>
                                <span className="flex">
                                    <Icon name='angle right' link size='small' className="projects__list-icon"/> 
                                    <li className="projects__list-item">Sign language to speech/text conversion</li>
                                </span>
                            </ul>
                        </div>
                    </div>
                    <div className="card-horizontal projects__project">
                        <div className="card-horizontal__image-box">
                            <img src={project1} alt="event"/>
                        </div>
                        <div className="card-horizontal__content">
                            <h2 class="heading-secondary">
                                Team B
                            </h2>
                            <p>DSC NUS is an inclusive community, nurturing learners of technology to engage and impact communities</p>
                            <ul className="projects__list">
                                <span className="flex">
                                    <Icon name='angle right' link size='small' className="projects__list-icon"/> 
                                    <li className="projects__list-item">Enhance learning for kids with autism</li>
                                </span>
                                <span className="flex">
                                    <Icon name='angle right' link size='small' className="projects__list-icon"/> 
                                    <li className="projects__list-item">Tackle food wastage in NUS Residential Colleges/Halls </li>
                                </span>
                                <span className="flex">
                                    <Icon name='angle right' link size='small' className="projects__list-icon"/> 
                                    <li className="projects__list-item">Enhance eye-test procedures</li>
                                </span>
                                <span className="flex">
                                    <Icon name='angle right' link size='small' className="projects__list-icon"/> 
                                    <li className="projects__list-item">Sign language to speech/text conversion</li>
                                </span>
                            </ul>
                        </div>
                    </div>
                    <div className="card-horizontal projects__project">
                        <div className="card-horizontal__image-box">
                            <img src={project1} alt="event"/>
                        </div>
                        <div className="card-horizontal__content">
                            <h2 class="heading-secondary">
                                Team C
                            </h2>
                            <p>DSC NUS is an inclusive community, nurturing learners of technology to engage and impact communities</p>
                            <ul className="projects__list">
                                <span className="flex">
                                    <Icon name='angle right' link size='small' className="projects__list-icon"/> 
                                    <li className="projects__list-item">Enhance learning for kids with autism</li>
                                </span>
                                <span className="flex">
                                    <Icon name='angle right' link size='small' className="projects__list-icon"/> 
                                    <li className="projects__list-item">Tackle food wastage in NUS Residential Colleges/Halls </li>
                                </span>
                                <span className="flex">
                                    <Icon name='angle right' link size='small' className="projects__list-icon"/> 
                                    <li className="projects__list-item">Enhance eye-test procedures</li>
                                </span>
                                <span className="flex">
                                    <Icon name='angle right' link size='small' className="projects__list-icon"/> 
                                    <li className="projects__list-item">Sign language to speech/text conversion</li>
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>
            
                {<Footer />}
            </div>
        );
    }
}

export default ProjectsPage;