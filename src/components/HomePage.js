import React, { Component } from "react";
import { Divider } from "semantic-ui-react";
import PageHeader from "./PageHeader.js";
import Footer from "./Footer.js";
import whoarewe from "../assets/HomePage/whoarewe.jpg";
import whatwedo from "../assets/HomePage/whatwedo.jpg";
import event1 from "../assets/HomePage/event1.jpg";
import event2 from "../assets/HomePage/event2.jpg";
import event3 from "../assets/HomePage/event3.jpg";
import event4 from "../assets/HomePage/hackforgood.jpeg";
import workshop from "../assets/HomePage/workshop.jpg";
import talk from "../assets/HomePage/talk.jpg";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        {<PageHeader />}
        <header class="home-header">
          <div class="home-header__text-box">
            <h1 class="heading-primary">
              <span class="heading-primary--main">Developer Student Clubs</span>
              <Divider />
              <span class="heading-primary--sub">
                #TECHFOR
                <span style={{ color: "#ea3f31" }}>G</span>
                <span style={{ color: "#4285f4" }}>O</span>
                <span style={{ color: "#f4b400" }}>O</span>
                <span style={{ color: "#0f9d58" }}>D</span>
              </span>
            </h1>
          </div>
        </header>
        <section className="section-home">
          <div className="section-home__content">
            <div class="section-home__text-box">
              <h2 class="heading-secondary">Who Are We?</h2>
              <p>
                DSC comprises of members who are passionate learners of
                technology and aims to make a difference in the society.
                <br />
                We come together to push our mission of #TechforGood.
              </p>
              <a href="/team" className="btn btn-yellow">
                Our Team
              </a>
            </div>
            <div className="section-home__image-box">
              <img
                src={whoarewe}
                alt="Who Are We"
                className="section-home__image"
              />
            </div>
          </div>
        </section>
        <section className="section-home section-blue">
          <div className="section-home__content section-home__content-reverse">
            <div class="section-home__image-box">
              <img
                className="section-home__image"
                alt="What We Do"
                src={whatwedo}
              />
            </div>
            <div class="section-home__text-box">
              <h2 class="heading-secondary">What we do?</h2>
              <p>
                By equipping our members with the relevant skills and industry
                knowledge, we aspire our members to give back for the betterment
                of the community.{" "}
              </p>
              <a href="/about" className="btn btn-yellow">
                About Us
              </a>
            </div>
          </div>
        </section>
        <section className="section-vertical">
          <h2 class="heading-secondary recent-events__header">Recent Events</h2>
          <div className="recents">
            <div className="recents__card">
              <div className="recents__image-box">
                <img alt="Tech for Good Workshops" src={workshop} />
              </div>
              <h2>Tech for Good Workshops</h2>
            </div>
            <div className="recents__card">
              <div className="recents__image-box">
                <img alt="Industry Talks" src={talk} />
              </div>
              <h2>Industry Talks</h2>
            </div>
            <div className="recents__card">
              <div className="recents__image-box">
                <img alt="Hack for good 2020" src={event4} />
              </div>
              <h2>Hack for good 2020!</h2>
            </div>
            <div className="recents__card">
              <div className="recents__image-box">
                <img alt="SEA Google Developers Submit" src={event1} />
              </div>
              <h2>SEA Google Developer Submit</h2>
            </div>
            <div className="recents__card">
              <div className="recents__image-box">
                <img alt="Core Team" src={event2} />
              </div>
              <h2>Launch of DSC Core Team</h2>
            </div>
            <div className="recents__card">
              <div className="recents__image-box">
                <img alt="Grand Launch Party" src={event3} />
              </div>
              <h2>DSC Grand Launch Party!</h2>
            </div>
          </div>
        </section>
        {<Footer />}
      </div>
    );
  }
}

export default Home;
