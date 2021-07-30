import React, { Component } from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import workshop from "../assets/ProjectsPage/workshop.png";
import hglogo from "../assets/ProjectsPage/hglogo.png";
import seminar from "../assets/ProjectsPage/seminar.png";
import { Link } from "react-router-dom";

class InternalTeamPage extends Component {
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
              <span class="heading-primary--main">Internal Projects</span>
            </h1>
          </div>
        </header>
        <section className="section">
          <div className="projects">
            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <span />
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
                <span />
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
                  Look out for more updates for HFG 2021{" "}
                  <Link to="/hack4good">here</Link>
                </p>
              </div>
            </div>

            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <span />
                <img src={seminar} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">Industry Talks</h2>
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
        <Footer />
      </div>
    );
  }
}

export default InternalTeamPage;
