import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import PageHeader from './PageHeader.js';
import Footer from './Footer.js'
import whoarewe from '../assets/HomePage/whoarewe.jpg'
import whatwedo from '../assets/HomePage/whatwedo.jpg'
import event1 from '../assets/HomePage/event1.jpg'
import event2 from '../assets/HomePage/event2.jpg'
import event3 from '../assets/HomePage/event3.jpg'

class RecruitmentPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {<PageHeader />}
                <header class="home-header">
                    <div class="home-header__text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">Join DSC NUS</span>    
                        </h1>
                            <p className="subtitle">We are looking for passionate leaders to help us push the mission of #TECHFORGOOD</p>
                    </div>
                </header>
                <section className="section">
                    <div className="section__content">
                        <div class="section__text-box">                             
                            <h2 class="heading-secondary">
                                Head of Business (External)
                            </h2>
                            <ul className="list">
                                <li>Lead a one-year value-adding project</li>
                                <li>Conduct market validation and scope out project</li>
                                <li>Establish partnersips with relevant stakeholders</li>
                                <li>Acquire project sponsorships as necessary</li>
                            </ul>
                        </div>
                        <div className="section__image-box">
                            <img src={whoarewe} alt="Who Are We" className="section__image"/>
                        </div>
                    </div>
                </section>
                <section className="section section-blue">
                    <div className="section__content">
                        <div class="section__image-box">     
                            <img className="section__image" alt="What We Do" src={whatwedo} />  
                        </div>
                        <div class="section__text-box">                             
                            <h2 class="heading-secondary">
                                Deputy Internal Lead
                            </h2>
                            <ul className="list">
                                <li>Assist in planning and overall management of DSC Internal Department</li>
                                <li>Assist in the coordination and communication with other functions of DSC</li>
                                <li>Cultivate and build an environment for meaningful learning experience</li>
                                <li>Assist Internal Lead to fulfil the vision and mission of DSC</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="section__content">
                        <div class="section__text-box">                             
                            <h2 class="heading-secondary">
                                Head of Tech (External)
                            </h2>
                            <ul className="list">
                                <li>Lead the External Tech team</li>
                                <li>Scope out possible tech stack for the project</li>
                                <li>Help plan and design the architecture with group mates</li>
                                <li>Help execute the project</li>
                            </ul>
                        </div>
                        <div className="section__image-box">
                            <img src={whoarewe} alt="Who Are We" className="section__image"/>
                        </div>
                    </div>
                </section>
                {<Footer />}
            </div>
        )
    }
}

export default RecruitmentPage;