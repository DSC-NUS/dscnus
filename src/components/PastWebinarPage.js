import React from "react";
import PageHeader from "./PageHeader.js";
import workshop1 from "../assets/PastWebinarPage/workshop1.png";
import workshop2 from "../assets/PastWebinarPage/workshop2.png";
import workshop3 from "../assets/PastWebinarPage/workshop3.png";
import talk1 from "../assets/PastWebinarPage/talk1.png";
import talk2 from "../assets/PastWebinarPage/talk2.png";
import Footer from "./Footer.js";

const PastWebinarPage = () => (
  <>
    <PageHeader />
    <header class="past-webinar-header">
      <div class="past-webinar-header__text-box align-center">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Past Webinars</span>
        </h1>
        <p className="subtitle">
          Missed our past webinars and workshops but still keen on learning? You
          can watch the full recorded session here!
        </p>
      </div>
    </header>
    <div className="section-header section-green">
      <h2 class="heading-secondary">Tech-for-good Workshops</h2>
      <p>
        Learn from our very own Tech Team and pick up some tech skills by
        watching the following masterclasses.
      </p>
    </div>
    <section className="section">
      <div className="projects">
        <div className="card-horizontal projects__project">
          <div className="card-horizontal__image-box">
            <span />
            <img src={workshop1} alt="event" />
          </div>
          <div className="card-horizontal__content">
            <h2 class="heading-secondary">WORKSHOP 1</h2>
            <p>
              Seeking to become an experts Python? Re-watch our first
              #TechForGood workshop on Introduction to Python and Data Science
              Libraries Workshop{" "}
              <a href="https://www.youtube.com/watch?v=r5EPFGpq4lU">here</a>.
            </p>
            <br></br>
            <p>
              Download the accompanying materials{" "}
              <a href="https://drive.google.com/file/d/18-a0-FeBvo-75wOtizU9AjVMI262oYKz/view?usp=sharing">
                here.
              </a>
            </p>
          </div>
        </div>
        <div className="card-horizontal projects__project">
          <div className="card-horizontal__image-box">
            <span />
            <img src={workshop2} alt="event" />
          </div>
          <div className="card-horizontal__content">
            <h2 class="heading-secondary">WORKSHOP 2</h2>
            <p>
              Check out our second Python Programming and Data Science Workshop
              will further enhance your proficiency in python programming and
              analytical skills{" "}
              <a href="https://www.youtube.com/watch?v=vZc4JkU6YxA">here</a>.
            </p>
            <br></br>
            <p>
              Download the accompanying materials{" "}
              <a href="https://drive.google.com/file/d/1orlulR3nZ7sQ5VLxF46nlXZflG6o0Tt9/view?usp=sharing">
                here
              </a>
            </p>
          </div>
        </div>
        <div className="card-horizontal projects__project">
          <div className="card-horizontal__image-box">
            <span />
            <img src={workshop3} alt="event" />
          </div>
          <div className="card-horizontal__content">
            <h2 class="heading-secondary">WORKSHOP 3</h2>
            <p>
              Gain more exposure and practice the various classification of
              alogorithms by watching out final Tech for Good Data Science
              workshop on machine learning{" "}
              <a href="https://www.youtube.com/watch?v=ubqw79nLSYQ">here</a>.
            </p>
            <br></br>
            <p>
              Download the accompanying materials{" "}
              <a href="https://drive.google.com/file/d/1gdQqzRQUuXUKasizUfkg_KR8yMXKH5Hl/view?usp=sharing">
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="section-header section-red">
      <h2 class="heading-secondary">Industry Talks</h2>
      <p>
        Hear from a panel of outstanding guest speakers across different
        industries to learn and understand how technology can be utilised to
        make lasting impact in our society.
      </p>
    </div>
    <section className="section">
      <div className="projects">
        <div className="card-horizontal projects__project">
          <div className="card-horizontal__image-box">
            <span />
            <img src={talk1} alt="event" />
          </div>
          <div className="card-horizontal__content">
            <h2 class="heading-secondary">INDUSTRY TALK 1</h2>
            <p>
              Interested in knowing how technology can be applied in various
              industries and its impact? We have invited some prominent guest
              speakers across different industries (Environment, IT Consultancy
              and Social Good) to share with us their expertise as well as
              experience.
            </p>
            <br></br>
            <p>
              Rewatch it{" "}
              <a href="https://www.youtube.com/watch?v=I3w9Wxvqw1A">here</a>.
            </p>
          </div>
        </div>
        <div className="card-horizontal projects__project">
          <div className="card-horizontal__image-box">
            <span />
            <img src={talk2} alt="event" />
          </div>
          <div className="card-horizontal__content">
            <h2 class="heading-secondary">INDUSTRY TALK 2</h2>
            <p>
              Here how these industry experts from Education, Health Tech and
              Mental Health are using technology to drive social good in our
              community.
            </p>
            <br></br>
            <p>
              Rewatch it{" "}
              <a href="https://www.youtube.com/watch?v=XQtxCabo05o">here</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default PastWebinarPage;
