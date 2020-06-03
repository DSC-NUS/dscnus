import React, { Component } from 'react';
import PageHeader from './PageHeader.js';
import Footer from './Footer.js'
import biz from '../assets/HomePage/biz.jpg'
import tech from '../assets/HomePage/tech.jpg'

class RecruitmentPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {<PageHeader />}
                <header class="recruitment-header">
                    <div class="recruitment-header__text-box align-center">
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">Join DSC NUS</span>
                        </h1>
                        <p className="subtitle">We are looking for passionate leaders to help us push the mission of #TECHFORGOOD</p>
                        <p className="subtitle">Deadline: 19th April</p>
                        <a href="https://tinyurl.com/dscnusRecruitment" target="_blank" rel="noopener noreferrer" className="btn btn-yellow">Join us</a>
                    </div>

                    <section>
                        <div className="recruitment">
                            <a href="#internal" className="recruitment__content-box">
                                <p className="recruitment__roles">
                                    Internal
                                </p>
                            </a>
                            <a className="recruitment__content-box" href="#external">
                                <p className="recruitment__roles">
                                    External
                                </p>
                            </a>
                        </div>
                    </section>
                </header>

                <div className="section-header section-green">
                    <h2 class="heading-secondary">
                        Overall Mission for Internal Team
                    </h2>
                    <p>Spread the #TechForGood mission to the NUS community and beyond through organising events and workshops.</p>
                </div>

                <section className="section-home">
                    <div className="section-home__content">
                        <div class="section-home__text-box" id="internal">
                            <h2 class="heading-secondary">
                                Internal Lead
                            </h2>
                            <ul className="list">
                                <li>Managing tech associates for the planning of Tech For Good workshops </li>
                                <li>Form strategic partnerships with external organisations for workshops, events and club as a whole </li>
                                <li>Managing large-scale hackathon focused on social good (Hack for Good)</li>
                                <li>Working with publicity team to extend outreach for events and workshops </li>
                                <li>Assist in bonding of the club through events </li>
                            </ul>
                        </div>
                        <div className="section-home__image-box">
                            <img src={biz} alt="Who Are We" className="section-home__image" />
                        </div>
                    </div>
                </section>

                {/* <section className="section-home">
                    <div className="section-home__content">
                        <div class="section-home__image-box">     
                            <img className="section-home__image" alt="What We Do" src={deputy} />  
                        </div>
                        <div class="section-home__text-box">                             
                            <h2 class="heading-secondary">
                                Deputy Internal Lead
                            </h2>
                            <ul className="list">
                                <li>Assist Internal Lead in management of DSC Internal team for Tech For Good workshops, Hack for Good and other events.</li>
                                <li>Form strategic partnerships with external organisations for workshops, events and club as a whole.</li>
                                <li>Working with publicity team to extend outreach for events and workshops </li>
                                <li>Assist in bonding of the club through events </li>
                            </ul>
                        </div>
                    </div>
                </section> */}

                <div className="section-header section-red">
                    <h2 class="heading-secondary">
                        Overall Mission for External Team
                    </h2>
                    <p>Actualise the #TechForGood mission through implementing real-world projects in partnership with NPOs.</p>
                </div>

                <section className="section-home">
                    <div className="section-home__content">
                        <div class="section-home__text-box" id="external">
                            <h2 class="heading-secondary">
                                Head of Business
                            </h2>
                            <ul className="list">
                                <li>Reach out to Non-profit organisations for partnership opportunities.</li>
                                <li>Work closely with the partner non-profit organisation to understand their needs and determine how the project can fill the gap.</li>
                                <li>Work closely with the technology team to ensure that the product meets the organisation’s needs.</li>
                                <li>Lead ideation, market validation, prototyping and launch of product.</li>
                            </ul>
                        </div>
                        <div className="section-home__image-box">
                            <img src={biz} alt="Who Are We" className="section-home__image" />
                        </div>
                    </div>
                </section>

                <section className="section-recruitment">
                    <div className="section-recruitment__content section-recruitment__content-reverse">
                        <div className="section-recruitment__image-box">
                            <img src={tech} alt="Who Are We" className="section-recruitment__image" />
                        </div>
                        <div class="section-recruitment__text-box">
                            <h2 class="heading-secondary">
                                Head of Tech
                            </h2>
                            <ul className="list">
                                <li>Assist business head in reaching out to non-profit organisations.</li>
                                <li>Design the software architecture for the project.</li>
                                <li>Lead team of software engineers in developing the project.</li>
                                <li>Work closely with the business team to implement appropriate features for the project that will meet the organisation’s needs.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {<Footer />}
            </div>
        )
    }
}

export default RecruitmentPage;