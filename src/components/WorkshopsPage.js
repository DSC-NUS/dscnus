import React, { Component } from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

class WorkshopsPage extends Component {
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
              <span class="heading-primary--main">Upcoming Workshops</span>
            </h1>
          </div>
        </header>

        <section className="section-header">
          <h2 class="heading-secondary">Watch this space for future workshops!</h2>
          <p>
            Follow us on <a href="https://instagram.com/dscnus">Instagram</a> for updates.
          </p>
        </section>

        {/* <div className="section-header section-green">
          <h2 class="heading-secondary">FRONT-END WEB DEVELOPMENT WORKSHOPS</h2>
          <p>
            Get a good grasp of how the web works at a fundamental level by
            build your coding skills with us. By the end you will be able to use
            multiple languages to create your own mini project.
          </p>
        </div>
        <section className="section">
          <div className="projects">
            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <img src={frontend1} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">HTML AND CSS CRASH COURSE</h2>
                <p>
                  Want to build your own website from scratch? We will be going
                  through the basic building blocks to teach you how to style
                  your very own web page. Topics covered in this workshop will
                  include HTML DOM Structure, HTML Tag & Attribute, CSS Box
                  Model, CSS Properties & Values.
                </p>
                <br></br>
                <p>
                  <ul>
                    <li>
                      <strong>Date</strong>: Week 2, Wednesday 20th January
                    </li>
                    <li>
                      <strong>Time</strong>: 7.00pm
                    </li>
                    <li>
                      <strong>Venue</strong>: Online Workshop
                    </li>
                  </ul>
                </p>
                <br />
                <p>
                  Click{" "}
                  <a href="https://nus.syd1.qualtrics.com/jfe/form/SV_d71XSrZYC2v4DlP">
                    here
                  </a>{" "}
                  to sign up for the workshop.
                </p>
              </div>
            </div>
            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <img src={frontend2} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">JAVASCRIPT FOR BEGINNERS</h2>
                <p>
                  Want to become fluent in the world's most popular programming
                  language? This workshop will help you gain the necessary
                  background you’ll need to get started on your journey with
                  JavaScript. We will be covering JavaScript data types,
                  built-in methods & variables, conditionals and function syntax
                  just to name a few.
                </p>
                <br></br>
                <p>
                  <ul>
                    <li>
                      <strong>Date</strong>: Week 3, Wednesday 27th January
                    </li>
                    <li>
                      <strong>Time</strong>: 7.00pm
                    </li>
                    <li>
                      <strong>Venue</strong>: Online Workshop
                    </li>
                  </ul>
                </p>
                <br />
                <p>
                  Click{" "}
                  <a href="https://nus.syd1.qualtrics.com/jfe/form/SV_d71XSrZYC2v4DlP">
                    here
                  </a>{" "}
                  to sign up for the workshop.
                </p>
              </div>
            </div>

            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <img src={frontend3} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">
                  BUILDING INTERACTIVE WEB WITH JAVASCRIPT
                </h2>
                <p>
                  Curious to learn how to develop a dynamic and interactive
                  webpage? This workshop will guide you through HTML DOM
                  Manipulation and JavaScript Event Handling. Get ready to build
                  you own mini project.
                </p>
                <br></br>
                <p>
                  <ul>
                    <li>
                      <strong>Date</strong>: Week 4, Wednesday 3rd February
                    </li>
                    <li>
                      <strong>Time</strong>: 7.00pm
                    </li>
                    <li>
                      <strong>Venue</strong>: Online Workshop
                    </li>
                  </ul>
                </p>
                <br></br>
                <p>
                  Click{" "}
                  <a href="https://nus.syd1.qualtrics.com/jfe/form/SV_d71XSrZYC2v4DlP">
                    here
                  </a>{" "}
                  to sign up for the workshop.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-header section-green">
          <h2 class="heading-secondary">FINANCE & ANALYTICS</h2>
          <p>
            Did you know that Python and Finance go hand in hand? Join us to
            find out how Python can be used to model and solve real-world
            financial problems.
          </p>
        </div>
        <section className="section">
          <div className="projects">
            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <img src={finance1} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">INTRO TO FINANCE WITH PYTHON</h2>
                <p>
                  Are you a budding finance professional looking to automate and
                  enhance your work processes? In this workshop, we will be
                  introducing basic Python applied to financial concepts. Come
                  learn to handle data analysis on a large scale and automate
                  highly repetitive tasks.
                </p>
                <br></br>
                <p>
                  <ul>
                    <li>
                      <strong>Date</strong>: Week 3, Tuesday 26th January
                    </li>
                    <li>
                      <strong>Time</strong>: 7.00pm
                    </li>
                    <li>
                      <strong>Venue</strong>: Online Workshop
                    </li>
                  </ul>
                </p>
                <br />
                <p>
                  Click{" "}
                  <a href="https://nus.syd1.qualtrics.com/jfe/form/SV_dhfXc9mvsOb4CHz">
                    here
                  </a>{" "}
                  to sign up for the workshop.
                </p>
              </div>
            </div>
            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <img src={finance2} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">
                  CREATING ALGORITHMS & IMPLEMENTING THEM
                </h2>
                <p>
                  Want to apply your newly acquired Python skills to real-world
                  financial data? In this workshop you conduct preliminary
                  backtesting by writing a basic script in python.
                </p>
                <br></br>
                <p>
                  <ul>
                    <li>
                      <strong>Date</strong>: Week 4, Tuesday 2nd February
                    </li>
                    <li>
                      <strong>Time</strong>: 7.00pm
                    </li>
                    <li>
                      <strong>Venue</strong>: Online Workshop
                    </li>
                  </ul>
                </p>
                <br />
                <p>
                  Click{" "}
                  <a href="https://nus.syd1.qualtrics.com/jfe/form/SV_dhfXc9mvsOb4CHz">
                    here
                  </a>{" "}
                  to sign up for the workshop.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {<Footer />}
      </div>
    );
  }
}

export default WorkshopsPage;
