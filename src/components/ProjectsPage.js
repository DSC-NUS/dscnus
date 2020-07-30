import React, { Component } from 'react';
import { } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import project1 from '../assets/ProjectsPage/project1.png';
import workshop from '../assets/ProjectsPage/workshop.png'
import hglogo from '../assets/ProjectsPage/hglogo.png'
import seminar from '../assets/ProjectsPage/seminar.png'
import teamb from '../assets/ProjectsPage/teamb.png'
import teamc from '../assets/ProjectsPage/teamc.png'
import { Link } from 'react-router-dom';

class ProjectsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                {<PageHeader />}
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
                                <img src={workshop} alt="event" />
                            </div>
                            <div className="card-horizontal__content">
                                <h2 class="heading-secondary">
                                    Technology Workshops
                                </h2>
                                <p>In this academic year, DSC NUS will be running 2 main workshops: Web Development and Data Analytics. These workshops are targeted at beginners who have little coding background and they would be guided by experienced individuals throughout the process</p>
                                <br></br>
                                <p>For more information on each workshop and its materials, click <Link to="/workshops">here.</Link></p>
                            </div>
                        </div>
                        <div className="card-horizontal projects__project">
                            <div className="card-horizontal__image-box">
                                <img src={hglogo} alt="event" />
                            </div>
                            <div className="card-horizontal__content">
                                <h2 class="heading-secondary">
                                    Hack For Good
                                </h2>
                                <p>Hack For Good is a hackathon organised by the Internal Team to bring teams around Singapore together to brainstorm and implement ideas for the greater social good.</p>
                                <br></br>
                                <p>For event coverage, click <Link to="/hackforgood2020">here</Link></p>
                            </div>
                        </div>

                        <div className="card-horizontal projects__project">
                            <div className="card-horizontal__image-box">
                                <img src={seminar} alt="event" />
                            </div>
                            <div className="card-horizontal__content">
                                <h2 class="heading-secondary">
                                    Thematic Seminars
                                </h2>
                                <p>We will be hosting several seminars throughout the semester on how we can use technology to help improve social issues in Singapore.</p>
                                <br></br>
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
                            <img src={project1} alt="event" />
                        </div>
                        <div className="card-horizontal__content">
                            <h2 class="heading-secondary">
                                Team A : Auturec
                            </h2>
                            <p>1 in 150 children is diagnosed with autism in Singapore, with the number increasing as more undergo professional assessments. Parents who are untrained find it extremely difficult to teach children with autism and therefore seek professional therapy, which comes at a very high cost.</p>
                            <br></br>
                            <p>Auturec aims to help parents cope with this transition through a platform that integrates information, engagement activities as well as individualised progress tracking for the child. Our goal is to ensure every child with autism has the required aid to integrate with society and that every parent can easily find the support and information they require.</p>
                            <br></br>
                            <p>Check out our <Link to="/externalteamA">blog post</Link></p>
                        </div>
                    </div>
                    <div className="card-horizontal projects__project">
                        <div className="card-horizontal__image-box">
                            <img src={teamb} alt="event" />
                        </div>
                        <div className="card-horizontal__content">
                            <h2 class="heading-secondary">
                                Team B : Gift For Good
                            </h2>
                            <p>Our vision is for a more generous Singapore where every low-income family has access to basic necessities. Towards this aim, we are developing an online platform that facilitates in-kind donation from individual and corporate donors to non-profit organisations.</p>
                            <br></br>
                            <p>Check out our <Link to="/externalteamB">blog post</Link></p>
                        </div>
                    </div>
                    <div className="card-horizontal projects__project">
                        <div className="card-horizontal__image-box">
                            <img src={teamc} alt="event" />
                        </div>
                        <div className="card-horizontal__content">
                            <h2 class="heading-secondary">
                                Team C : Vantage Singapore
                            </h2>
                            <p>Vantage Singapore aims to elevate the disadvantaged to gain access to opportunities for a more inclusive society. Currently, we are working on a career readiness platform NPOs and relevant organizations can use to better prepare disadvantaged youths aiming to create a change in their lives for future work. </p>
                            <br></br>
                            <p>Our career readiness platform consists of a guided resume builder aimed at enabling individuals to create a resume that fits industry standards and display personal information and relevant portfolios. Additionally, we aim to include pre-career employment test to provide recommended opportunities and a consolidated industry information to aid in career exploration by properly disseminating relevant industry information for youths with little no experience.</p>
                            <br></br>                            
                            <p>Check out our <Link to="/externalteamC">blog post</Link></p>
                        </div>
                    </div>
                </div>

                {<Footer />}
            </div>
        );
    }
}

export default ProjectsPage;