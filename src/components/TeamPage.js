import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import CarouselInternalTeam from "./CarouselInternalTeam.js";
import CarouselExternalTeam from "./CarouselExternalTeam.js";

const imagePath = require.context("./../assets/TeamPage/", true);

class TeamPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {<PageHeader />}
        <header class="home-header team-header">
          <div class="home-header__text-box">
            <h1 class="heading-primary">
              <span class="heading-primary--main">Our Team</span>
            </h1>
          </div>
        </header>
        <div className="section-header section-blue">
          <h2 class="heading-secondary">Leads</h2>
          <p>
            The Leads oversees DSC operations and groom members throughout their
            time in the team.
          </p>
        </div>
        <section className="section team__carousel">
          <Card
            style={{ margin: "0 auto", width: "70vh" }}
            image={imagePath(`./Leads/lead.jpg`)}
            header="Leads"
          />
        </section>

        <div className="section-header section-green">
          <h2 class="heading-secondary">Internal Team</h2>
          <p>
            The Internal Division focuses on running the club and managing
            activities and events related to the school and students. Find out
            more <a href="/projects"> here.</a>
          </p>
        </div>
        <section className="section team__carousel">
          <Card
            style={{ margin: "0 auto", width: "70vh" }}
            image={imagePath(`./InternalTeam/internal.jpg`)}
            header="Internal Team Leads"
          />
        </section>

        <div className="section-header section-red">
          <h2 class="heading-secondary">External Team</h2>
          <p>
            The External Division focuses on all activities related to the local
            organizations, communities and businesses outside of the school.
            Find out more <a href="/projects"> here.</a>
          </p>
        </div>
        <section className="section">
          <Card
            style={{ margin: "50px auto", width: "25vw" }}
            image={imagePath(`./ExternalTeam/external.jpg`)}
            header="External Team Leads"
          />
        </section>
        {<Footer />}
      </div>
    );
  }
}

export default TeamPage;
