import React from 'react';
import { Icon } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import project1 from '../assets/ProjectsPage/project1.png';

const ProjectsPage = () => (
    <div>
        {<PageHeader/>}
        <header class="home-header projects-header">
            <div class="home-header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Our Projects</span>
                </h1>
            </div>
        </header>
        <section className="section">
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

                <div className="card-horizontal">
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
            </div>
        </section>
        {<Footer />}
    </div>
);

export default ProjectsPage;