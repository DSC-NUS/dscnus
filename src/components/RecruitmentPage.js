import React, { Component } from 'react';
import PageHeader from './PageHeader.js';
import Footer from './Footer.js'
import { Link } from 'react-router-dom';
import financeIcon from "../assets/RecruitmentPage/financeIcon.svg";
import operationsIcon from "../assets/RecruitmentPage/operationsIcon.svg";
import partnershipsIcon from "../assets/RecruitmentPage/partnershipsIcon.svg";
import techIcon from "../assets/RecruitmentPage/techIcon.svg";
import publicityIcon from "../assets/RecruitmentPage/publicityIcon.svg";
import sweIcon from "../assets/RecruitmentPage/sweIcon.svg";
import bizIcon from "../assets/RecruitmentPage/bizIcon.svg";
import designIcon from "../assets/RecruitmentPage/designIcon.svg";


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
                            <span className="heading-primary--main">DSC NUS is recruiting</span>
                        </h1>
                        <p className="subtitle">
                            We are forming the DSC team for AY 2020/2021.<br/>
                            If you are passionate about using technology to make a positive impact,
                            apply to join us in this #TechForGood journey.                            
                        </p>
                        <p className="subtitle">Application period:<br/>4 August &nbsp;-&nbsp; 23 August</p>
                        <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-yellow disabled">
                            Applications Opening Soon
                        </a>
                    </div>
                </header>

                <div className="section-header section-blue">
                    <h2 class="heading-secondary">
                        Our Internal Team
                    </h2>
                    <p>
                        Join the Internal Team to spread the #TechForGood mission to the NUS community and beyond through organising events and workshops.
                    </p>
                </div>

                <section className="section-recruitment">
                    <h3 className="section-recruitment__title">
                        Internal Team
                    </h3>
                    <p className="section-recruitment__description">
                        The Internal Division focuses on running the club and managing activities and events related to the school and students.
                        We organize technology workshops that aim to upskill NUS students across all faculties, and the annual Hack for Good hackathon
                        that brings together students to work on solving social problems through technology.
                    </p>
                    <h3 className="section-recruitment__roles-title">Our Roles Available:</h3>
                    <div className="section-recruitment__roles-group">
                        <div className="section-recruitment__role">
                            <img alt="finance" src={financeIcon} />
                            <h4>Finance</h4>
                            <ul>
                                <li>Assist the Internal Lead and Deputy Internal Lead on financial planning and resource allocation</li>
                                <li>Responsible for financial planning and providing accountability reports for all transactions conducted</li>
                            </ul>
                        </div>
                        <div className="section-recruitment__role">
                            <img alt="workshops" src={techIcon} />
                            <h4>Technology</h4>
                            <ul>
                                <li>Conduct <Link to="/workshops">technology workshops</Link> organized by DSC for NUS students and beyond</li>
                            </ul>
                        </div>
                        <div className="section-recruitment__role">
                            <img alt="ops" src={operationsIcon} />
                            <h4>Operations</h4>
                            <ul>
                                <li>Support events such as the tech workshops and Hack for Good logistically and administratively</li>
                            </ul>
                        </div>
                        <div className="section-recruitment__role">
                            <img alt="partnerships" src={partnershipsIcon} />
                            <h4>Partnerships</h4>
                            <ul>
                                <li>Build strategic partnerships with external parties to support our vision and mission</li>
                            </ul>
                        </div>
                        <div className="section-recruitment__role">
                            <img alt="pubs" src={publicityIcon} />
                            <h4>Publicity</h4>
                            <ul>
                                <li>Brand and promote our events through social media channels and website</li>
                                <li>Social Media Managers, Webmasters and Photographers</li>
                            </ul>
                        </div>                                                
                    </div>
                </section>

                <div className="section-header section-red">
                    <h2 class="heading-secondary">
                        Our External Team
                    </h2>
                    <p>
                        Join the External Team to actualise the #TechForGood mission through implementing real-world projects in partnership with non-profit organisations.<br/>
                        Check out our upcoming projects for AY 2020/2021 and the roles available below.
                    </p>
                </div>

                <section className="section-recruitment">
                    <h3 className="section-recruitment__title">
                        Project Digital Kampong
                    </h3>
                    <p className="section-recruitment__description">
                        Digital Kampong is a digital platform that aims to connect the 20,000 SMEs under the Federation of Merchants' Associations, Singapore (FMAS), and consumers.
                        Besides expanding the digital footprint of heartland businesses, Digital Kampong will also serve as a community where SMEs and FMAS can find opportunities
                        for collaboration and support online.
                    </p>
                    <h3 className="section-recruitment__roles-title">Our Roles Available:</h3>
                    <div className="section-recruitment__roles-group">
                        <div className="section-recruitment__role">
                            <img alt="swe" src={sweIcon} />
                            <h4>Software Engineer</h4>
                            We are looking for Software Engineers who understand frontend/backend development. As a Software Engineer,
                            you will:
                            <ul>
                                <li>Create website layout/interface using React/HTML/CSS/Redux</li>
                                <li>Create backend services with knowledge of REST APIs and databases (NodeJS, MongoDB)</li>
                                <li>Deploy and manage application on popular cloud services such as GCP/AWS</li>
                            </ul>
                        </div>
                        <div className="section-recruitment__role">
                            <img alt="design" src={designIcon} />
                            <h4>Product Designer</h4>
                            We are looking for Designers who have an understanding of good user experience. As a Product Designer, you will:
                            <ul>
                                <li>Produce high quality UI/UX wireframes using Adobe/Figma/other software</li>
                                <li>Seek to understand the end users and apply understanding in UI/UX design</li>
                                <li>Collaborate with developers and stakeholders on an agile methodology to iterate and improve product</li>
                            </ul>
                        </div>
                        <div className="section-recruitment__role">
                            <img alt="biz" src={bizIcon} />
                            <h4>Business Associate</h4>
                            We are looking for passionate Business Associates who can engage with others effectively. As a Business Associate,
                            you will:
                            <ul>
                                <li>Lead an end-to-end workstream under Digital Kampung (i.e. Platform feature).</li>
                                <li>Coordinate between our partner non-profit, platform users and the technology team </li>
                            </ul>
                        </div>
                    </div>                    
                </section>
                <hr/>
                <section className="section-recruitment">
                    <h3 className="section-recruitment__title">
                        Project Quest
                    </h3>
                    <p className="section-recruitment__description">
                        Quest is a progressive web app that enables non-profit organisations (NPOs) to conduct effective and
                        customisable program evaluation, and empowers youths through interactive "quests" and engaging journaling
                        features. We will be collaborating with CampusImpact, an NPO that aims to guide youths through
                        the transitional phase of their lives.
                    </p>
                    <h3 className="section-recruitment__roles-title">Our Roles Available:</h3>
                    <div className="section-recruitment__roles-group">
                        <div className="section-recruitment__role">
                            <img alt="swe" src={sweIcon} />
                            <h4>Software Engineer</h4>
                            We are looking for Software Engineers who are interested in creating beautiful applications that make a difference!                            
                            As a Software Engineer, you will:                            
                            <ul>
                                <li>Build a Progressive Web App that supports development of youths, and data analytics of the staff members.</li>
                                <li>Create engaging frontend interfaces using React and Redux.</li>
                                <li>Develop modern backend infrastructure using technologies such as Node, GraphQL and MongoDB</li>
                            </ul>
                        </div>
                        <div className="section-recruitment__role">
                            <img alt="design" src={designIcon} />
                            <h4>UI/UX Designer</h4>
                            We are looking for a UI/UX designer passionate about delivering a smooth and enjoyable experience to the youths using our app.
                            As a UI/UX designer, you will:
                            <ul>
                                <li>Design interfaces such as journals and dashboards with technologies such as Figma or Adobe XD</li>
                                <li>Conduct user research and perform user testing with youths on the ground</li>
                            </ul>
                        </div>
                        <div className="section-recruitment__role">
                            <img alt="design" src={designIcon} />
                            <h4>Graphic Designer</h4>
                            We are looking for a Graphic Designer with experience in creating digital art that captivates youths.
                            We are looking to make our app as fun and entertaining as possible, and we will need your help with that.
                            As a Graphic Designer, you will:
                            <ul>
                                <li>Design static assets to be used in various parts of the application</li>
                                <li>Develop animations for web applications using technologies such as After Effects and Lottie</li>
                            </ul>
                        </div>                        
                        <div className="section-recruitment__role">
                            <img alt="biz" src={bizIcon} />
                            <h4>Business Associate</h4>
                            We are looking for Business Associates who are good at client management. As a Business Associate, you will:
                            <ul>
                                <li>Manage the partnership with the NPO and ensure the alignment of goals between the NPO and the tech team</li>
                                <li>Define requirements for the app’s features.</li>
                                <li>Facilitate user acceptance testing and ensure that the final product addresses the NPO’s needs.</li>
                            </ul>
                        </div>
                    </div>                    
                </section>
                <hr />
                <section className="section-recruitment">
                    <h3 className="section-recruitment__title">
                        Project Journey
                    </h3>
                    <p className="section-recruitment__description">
                        Journey is a web application that aims to enable NPOs to manage volunteers and build a holistic development plan for
                        their volunteering program. The application will be used to empower Blessings in a Bag - a community organisation serving
                        troubled and less fortunate youths - to further build on their volunteer community and guide their 
                        volunteers in achieving fulfilment from their volunteering journey.
                    </p>
                    <h3 className="section-recruitment__roles-title">Our Roles Available:</h3>
                    <div className="section-recruitment__roles-group">
                        <div className="section-recruitment__role">
                            <img alt="swe" src={sweIcon} />
                            <h4>Software Engineer</h4>
                            We are looking for Software Engineers with experience creating web applications. As a Software Engineer, you will:                
                            <ul>
                                <li>Create website layout/user interfaces with HTML, CSS, ReactJS, React-Redux</li>
                                <li>Integrate back-end services and databases with SQL, NodeJS</li>
                                <li>Build application on top of GCP tools such App Engine, CloudSQL, GCS</li>
                            </ul>
                        </div>
                        <div className="section-recruitment__role">
                            <img alt="design" src={designIcon} />
                            <h4>Product Designer</h4>
                            We are looking for creative individuals to do the design work. As a Product Designer, you will:
                            <ul>
                                <li>Produce high quality UI/UX design solutions through wireframes, visual and graphic designs, and prototypes with Figma/Adobe </li>
                                <li>Investigate user experience design requirements with stakeholders</li>
                                <li>Collaborate with developers to ship designs to production in iterative feedback cycles</li>
                            </ul>
                        </div>           
                        <div className="section-recruitment__role">
                            <img alt="biz" src={bizIcon} />
                            <h4>Business Associate</h4>
                            We are looking for Business Associates who will be able to drive the delivery of the product. As a Business Associate, you will:
                            <ul>
                                <li>
                                    Be responsible for coordination and communication with the NPO, including demonstrations and reporting for
                                    milestones, user acceptance testing, and making changes to the requirements
                                </li>
                                <li>Develop product with technology team by providing any business-related input </li>
                                <li>Track project progress and prioritise requirements for delivery</li>
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