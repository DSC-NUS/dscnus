import React, { Component } from "react";
import {} from "semantic-ui-react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import project1 from "../assets/ProjectsPage/project1.png";
import workshop from "../assets/ProjectsPage/workshop.png";
import hglogo from "../assets/ProjectsPage/hglogo.png";
import seminar from "../assets/ProjectsPage/seminar.png";
import teamb from "../assets/ProjectsPage/teamb.png";
import teamc from "../assets/ProjectsPage/teamc.png";
import { Link } from "react-router-dom";

class ProjectsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
          <h2 class="heading-secondary">Internal Team Projects</h2>
          <p>
            The Internal Team leads education driven initiatives within the NUS
            community in hopes of making technology accessible to all.
          </p>
        </div>
        <section className="section">
          <div className="projects">
            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <img src={workshop} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">Technology Workshops</h2>
                <p>
                  In this academic year, DSC will be running 2 main workshops:
                  Web Development and Data Analytics. These workshops are
                  targeted at beginners who have little coding background and
                  they would be guided by experienced individuals throughout the
                  process
                </p>
                <br></br>
                <p>
                  For more information on each workshop and its materials, click{" "}
                  <Link to="/events">here.</Link>
                </p>
              </div>
            </div>
            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <img src={hglogo} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">Hack For Good</h2>
                <p>
                  Hack For Good is a hackathon organised by the Internal Team to
                  bring teams around Singapore together to brainstorm and
                  implement ideas for the greater social good.
                </p>
                <br></br>
                <p>
                  For event coverage, click{" "}
                  <Link to="/hackforgood2020">here</Link>
                </p>
              </div>
            </div>

            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <img src={seminar} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">Thematic Seminars</h2>
                <p>
                  We will be hosting several seminars throughout the semester on
                  how we can use technology to help improve social issues in
                  Singapore.
                </p>
                <br></br>
              </div>
            </div>
          </div>
        </section>

        <div className="section-header section-red">
          <h2 class="heading-secondary">External Team Projects</h2>
          <p>
            The External Team leads community based projects in different
            sectors in hopes to benefit them in the long run.
          </p>
        </div>
        <div className="projects">
          <div className="card-horizontal projects__project">
            <div className="card-horizontal__image-box">
              <img src={project1} alt="event" />
            </div>
            <div className="card-horizontal__content">
              <h2 class="heading-secondary">Project Digital Kampong</h2>
              <br />
              <p>
                Digital Kampong is a digital platform that aims to connect the
                20,000 SMEs under the Federation Of Merchants' Associations,
                Singapore (FMAS), and consumers. Besides expanding the digital
                footprint Of heartland businesses. Digital Kampong will also
                serve as a community where SMEs and FMAS can find opportunities
                for collaboration and support online.
              </p>
            </div>
          </div>
          <div className="card-horizontal projects__project">
            <div className="card-horizontal__image-box">
              <img src={teamb} alt="event" />
            </div>
            <div className="card-horizontal__content">
              <h2 class="heading-secondary">Project Quest</h2>
              <br />
              <p>
                Quest is a progressive web app that enables non-profit
                organisations (NPOS) to conduct effective and customisable
                prograrn evaluation, and empowers youths through interactive
                "quests" and engaging journaling features. We will be
                collaborating with Campuslmpact, an NPO that aims to guide
                youths through the transitional phase Of their lives.
              </p>
            </div>
          </div>
          <div className="card-horizontal projects__project">
            <div className="card-horizontal__image-box">
              <img src={teamc} alt="event" />
            </div>
            <div className="card-horizontal__content">
              <h2 class="heading-secondary">Project Journey</h2>
              <br />
              <p>
                Journey is a web application that aims to enable NPOs to manage
                volunteers and build a holistic development plan for their
                volunteering program. The application will be used to empower
                Blessings in a Bag - a community organisation serving troubled
                and less fortunate youths - to further build on their volunteer
                community and guide their volunteers in achieving fulfilment
                frorn their volunteering journey.
              </p>
            </div>
          </div>
        </div>

        {<Footer />}
      </div>
    );
  }
}

export default ProjectsPage;
