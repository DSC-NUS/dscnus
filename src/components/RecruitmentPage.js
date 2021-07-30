import React, { Component } from "react";
import PageHeader from "./PageHeader.js";
import { Divider } from "semantic-ui-react";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import { appOpen } from "../utils/utils.js";
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
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        {<PageHeader />}
        <header class="recruitment-header">
          <div class="recruitment-header__text-box align-center">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Join DSC</span>
              <Divider />
            </h1>
            <p className="subtitle">
              We are looking for passionate leaders to help us push the mission
              of
            </p>
            <p className="heading-primary--sub">
              #TECHFOR
              <span style={{ color: "#ea3f31" }}>G</span>
              <span style={{ color: "#4285f4" }}>O</span>
              <span style={{ color: "#f4b400" }}>O</span>
              <span style={{ color: "#0f9d58" }}>D</span>
            </p>
            <p className="subtitle">
              Sign ups close 21 August 2359hrs
            </p>
          </div>
          <br/>
          { appOpen ?
            <a href="https://bit.ly/DSCNUS2021" target="blank" className="btn btn-yellow">
              Apply here
            </a> :
            <h2 className="subtitle">
              Sign ups have closed on 21 August. Thank you for your interest!
            </h2>
          }
        </header>

        <div className="section-header section-blue">
          <h2 class="heading-secondary">Our Internal Team</h2>
          <p>
            Join the Internal Team to spread the #TechForGood mission to the NUS
            community and beyond through organising events and workshops.
          </p>
        </div>

        <section className="section-recruitment">
          <h3 className="section-recruitment__title">Internal Team</h3>
          <p className="section-recruitment__description">
            The Internal Team focuses on running the club and managing
            activities and events related to the school and students. We
            organize technology workshops that aim to upskill NUS students
            across all faculties, and the annual Hack for Good hackathon that
            brings together students to work on solving social problems through
            technology.
          </p>
          <h3 className="section-recruitment__roles-title">
            Roles Available:
          </h3>
          <div className="section-recruitment__roles-group">
            <div className="section-recruitment__role">
              <img alt="workshops" src={techIcon} />
              <h4>Technology</h4>
              <ul>
                <li>
                  Conduct <Link to="/events">technology workshops</Link>{" "}
                  organized by DSC for NUS students and beyond
                </li>
              </ul>
            </div>
            <div className="section-recruitment__role">
              <img alt="finance" src={financeIcon} />
              <h4>Finance</h4>
              <ul>
                <li>
                  Responsible for financial planning, resource allocation and providing
                  accountability reports for all transactions conducted
                </li>
              </ul>
            </div>
            <div className="section-recruitment__role">
              <img alt="ops" src={operationsIcon} />
              <h4>Operations</h4>
              <ul>
                <li>
                  Support events such as the tech workshops and Hack for Good
                  logistically and administratively
                </li>
              </ul>
            </div>
            <div className="section-recruitment__role">
              <img alt="partnerships" src={partnershipsIcon} />
              <h4>Partnerships</h4>
              <ul>
                <li>
                  Build strategic partnerships with external parties to support
                  our vision and mission
                </li>
              </ul>
            </div>
            <div className="section-recruitment__role">
              <img alt="pubs" src={publicityIcon} />
              <h4>Publicity</h4>
              <ul>
                <li>
                  Brand and promote our events through social media channels and
                  website
                </li>
                <li>Social Media Managers, Webmasters and Photographers</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section-header section-red">
          <h2 class="heading-secondary">Our External Team</h2>
          <p>
            Join the External Team to actualise the #TechForGood mission through
            implementing real-world projects in partnership with non-profit
            organisations.
            <br />
            Check out our past projects <a href="externalprojects">here</a>.
          </p>
        </div>

        <section className="section-recruitment">
          <h3 className="section-recruitment__title">
            External Team
          </h3>
          <p className="section-recruitment__description">
            The External Team is dedicated to harnessing technology for social good.
            Through partnerships with non-profit organizations, external team members work together
            to implement tech solutions to solve real-world problems. Each external division consists
            of a closely-knit team with members handling different aspects of the project,
            from planning to development to marketing and design.
          </p>
          <h3 className="section-recruitment__roles-title">
            Our Roles Available:
          </h3>
          <div className="section-recruitment__roles-group">
            <div className="section-recruitment__role">
              <img alt="swe" src={sweIcon} />
              <h4>Software Engineer</h4>
              We are looking for Software Engineers who are interested in
              creating beautiful applications that make a difference! As a
              Software Engineer, you will:
              <ul>
                <li>
                  Create website layout/interface using Frontend development frameworks
                </li>
                <li>
                  Create Backend services with knowledge of REST APIs and
                  databases
                </li>
                <li>
                  Deploy and manage application on cloud services such as
                  GCP/AWS
                </li>
              </ul>
            </div>
            <div className="section-recruitment__role">
              <img alt="design" src={designIcon} />
              <h4>Product Designer</h4>
              We are looking for Designers who have an understanding of good
              user experience. As a Product Designer, you will:
              <ul>
                <li>
                  Produce high quality UI/UX design solutions through
                  wireframes, visual and graphic designs, and prototypes with
                  Figma/Adobe
                </li>
                <li>
                  Investigate user experience design requirements with
                  stakeholders
                </li>
                <li>
                  Collaborate with developers to ship designs to production in
                  iterative feedback cycles
                </li>
              </ul>
            </div>
            <div className="section-recruitment__role">
              <img alt="biz" src={bizIcon} />
              <h4>Business Associate</h4>
              We are looking for passionate Business Associates who can engage
              with others effectively. As a Business Associate, you will:
              <ul>
                <li>
                  Be responsible for coordination and communication with the
                  NPO, including demonstrations and reporting for milestones,
                  user acceptance testing, and making changes to the
                  requirements
                </li>
                <li>
                  Develop product with technology team by providing
                  business-related inputs
                </li>
                <li>
                  Track project progress and prioritise requirements for
                  delivery
                </li>
              </ul>
            </div>
          </div>
        </section>
        {<Footer />}
      </div>
    );
  }
}

export default RecruitmentPage;
