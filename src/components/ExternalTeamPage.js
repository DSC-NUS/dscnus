import React, { Component } from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import digitalKampongWebsiteLogo from "../assets/ProjectsPage/digital-kampong-website-logo.svg";
import questWebsiteLogo from "../assets/ProjectsPage/quest-website-logo.svg";
import journeyWebsiteLogo from "../assets/ProjectsPage/journey-website-logo.svg";

class ExternalTeamPage extends Component {
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
              <span class="heading-primary--main">External Projects</span>
            </h1>
          </div>
        </header>
        <div className="section-header section-green">
          <h2 class="heading-secondary">Current Projects</h2>
          <p>
            The External Team leads community based projects in different
            sectors in hopes to benefit them in the long run.
          </p>
        </div>
        <section className="section">
          <div className="projects">
            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <span />
                <img src={digitalKampongWebsiteLogo} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">Project Digital Kampong</h2>
                <br />
                <p>
                  Team Digital Kampong is partnering with the Federation of
                  Merchants’ Associations, Singapore (FMAS), a non-profit that
                  represents the interest of merchants operating in HDB
                  neighbourhood and town centres, as well as stallholders
                  selling in National Environment Agency (NEA) hawker centres
                  and markets.
                </p>
                <br />
                <p>
                  Our project, Digital Kampong, is a platform that will form
                  part of the existing official Federation of Merchants
                  Association, Singapore (FMAS) website, and connects customers,
                  merchants and FMAS. This project aims to support all members
                  under FMAS including hawkers and merchants to transition into
                  the new normal sustainably and effectively.
                </p>
                <br />
                <p>
                  As a mobile-friendly microsite on the official FMAS website,
                  Digital Kampong aims to solve both problems of merchants and
                  hawkers under FMAS. To increase the digital presence of FMAS
                  hawkers and merchants, Jalan Makan adopts an Online-to-Offline
                  (O2O) model, to capture the growing market of potential
                  customers who research online before making a purchase. The
                  key value proposition of Jalan Makan that will attract users
                  beyond existing solutions is information coverage of lesser
                  known hawkers and merchants in Singapore. For example, menu
                  and cultural information of store owners (i.e. Hawkers and
                  merchants) in Singapore that was not available on the internet
                  previously will be uploaded to Jalan Makan. Further,
                  information will be frequently updated with exclusive
                  promotions with hawkers and merchants under FMAS via Jalan
                  Makan.
                </p>
              </div>
            </div>
            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <span />
                <img src={questWebsiteLogo} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">Project Quest</h2>
                <br />
                <p>
                  Bounded by a unified passion for serving the community using
                  technology, Team Quest partnered with CampusImpact, a
                  non-profit organisation that aims to assist underprivileged
                  youths during the transitional period of their lives. It was
                  just the right time, as CampusImpact was looking to create a
                  scalable feedback system for their youths. Thus, Team Quest’s
                  project involves creating a progressive web application that
                  allows CampusImpact to build regular feedback loops for their
                  various programs through short questionnaires.
                </p>
                <br />
                <b>
                  There will be two types of accounts associated with this
                  application:
                </b>
                <ol>
                  <li>Staff Account:</li>
                  <ul>
                    <li>
                      Create and administer question sets for various programs,
                      either from an existing questionnaire template or a new
                      one.
                    </li>
                    <li>
                      Compare feedback collected from the students before and
                      after their programs.
                    </li>
                    <li>
                      Create programs and assign students and questionnaires to
                      these programs.
                    </li>
                  </ul>
                  <li>Youth Account:</li>
                  <ul>
                    <li>
                      View and complete questionnaires for various programs,
                      which will be set out as “quests” in the dashboard page.
                    </li>
                  </ul>
                </ol>

                <br />
                <p>
                  As completing questionnaires can be tedious or boring, the
                  Youth Account will have a gamified look and feel created
                  through pixel art. On top of that, there is a mascot - a cute-
                  looking dragon that will show the youths the quests
                  (questionnaires) they will have to complete. This engaging
                  design aims to increase the youths’ interest in completing the
                  questionnaires and instil a regular habit of reflecting on
                  their experiences in the programs and providing feedback. With
                  this application, Team Quest hopes that CampusImpact will
                  better understand their youths and keep track of their
                  progress in an organised and structured manner. The
                  application will also help them assess their programs in
                  greater depth to derive insights on improving and catering to
                  the youths’ needs.
                </p>
              </div>
            </div>
            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <span />
                <img src={journeyWebsiteLogo} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">Project Journey</h2>
                <br />
                <p>
                  Journey is partnering with Blessings in a Bag, a community
                  organisation serving troubled and less fortunate youths by
                  providing curated alternative learning experiences with a
                  focus on literacy as well as vital necessities to the
                  community within Singapore while empowering the next
                  generation of volunteers. As a volunteer-powered community,
                  Blessings in a Bag supports and guides the volunteers in
                  leading a fulfilling volunteer journey. While volunteers
                  usually start volunteering because of their passion for a
                  social cause, they easily drop out if there is no proper
                  guidance and engagement from the organisation to last the long
                  term. Therefore, we are currently building Journey, a web
                  application that aims to support Blessings in a Bag to better
                  manage their volunteers &amp; build a holistic development
                  plan for their volunteering program. The application will
                  empower Blessings in a Bag to further build on their volunteer
                  community and guide them in achieving fulfilment from their
                  volunteering journeys.
                </p>
                <br />
                <b>Journey mainly supports Blessings in a Bag in 3 areas:</b>
                <ul>
                  <li>
                    Volunteer Management - basic volunteer management
                    functionalities such as new volunteer registration, event
                    creation and volunteer signup for roles.
                  </li>
                  <li>
                    Volunteer Progression - supports a learning system where
                    onboarding plans and training modules are provided to
                    volunteers based on skills required to volunteer in specific
                    teams
                  </li>
                  <li>
                    Volunteer Community - provides opportunities for feedback,
                    recognition, and mentoring within the community
                  </li>
                </ul>

                <br />
                <p>
                  This project aims to increase volunteer engagement and
                  satisfaction. Blessings in a Bag would be able to better
                  support and empower the volunteers by leveraging on the data
                  and the system features to provide a more connected and
                  personalised volunteer journey to improve volunteer engagement
                  and retention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="section-header section-red">
          <h2 class="heading-secondary">Past Projects</h2>
        </div> */}

        <Footer />
      </div>
    );
  }
}

export default ExternalTeamPage;
