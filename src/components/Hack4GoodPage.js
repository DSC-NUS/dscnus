import React from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer.js";
import logo from "../assets/ProjectsPage/hglogo.png";
import sponsorOsa from "../assets/Hack4GoodPage/sponsor-osa.png";
import sponsorSl2 from "../assets/Hack4GoodPage/sponsor-sl2.png";
import sponsorPaypal from "../assets/Hack4GoodPage/sponsor-paypal.png";
import booklet from "../assets/Hack4GoodPage/booklet.pdf";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Icon, Image } from "semantic-ui-react";
import PdfRenderer from "./PdfRenderer";

const Hack4GoodPage = () => {
  return (
    <>
      <PageHeader />
      <header class="home-header projects-header">
        <div class="home-header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Hack For Good</span>
          </h1>
        </div>
      </header>
      <section className="section">
        <div className="projects">
          <div className="card-horizontal projects__project">
            <div
              className="card-horizontal__image-box"
              style={{ textAlign: "center" }}
            >
              <span />
              <img src={logo} alt="logo" style={{ width: "50%" }} />
            </div>
            <div className="card-horizontal__content">
              <h2>HACK FOR GOOD</h2>
              <br></br>
              <p>
                In collaboration with Conjunct Consulting, and sponsored by NUS
                OSA, DSC SoC presents Hack For Good, a student-run hackathon
                which seeks to inspire students to learn and use technology for
                social causes. Our innovation challenge is unique in that we are
                posing real problem statements provided by NPOs in Singapore.
              </p>
              <br />
              <p>
                Participating teams are expected to create technological
                prototypes as part of their solution to tackle their chosen
                statement and directly benefit the NPO backing it. We want to be
                practical and do real good with this initiative. We are hoping
                to foster collaborations between the club, corporate sponsors,
                NPOs and the students in this event!
              </p>
              <br />
              <p>
                Click <a href="http://bit.ly/hackforgood2021">here</a> to sign
                up for the event!!
              </p>
            </div>
          </div>
        </div>
      </section>
      <VerticalTimeline className="timeline">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="22 February"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          icon={
            <Icon
              name="pencil alternate"
              size="large"
              style={{
                width: "100%",
                height: "100%",
                marginTop: "30%",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Sign up</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="5 March"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <Icon
              name="file alternate outline"
              size="large"
              style={{
                width: "100%",
                height: "100%",
                marginTop: "30%",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Release of problem statements & Briefing
            <p style={{ display: "inline" }}>
              {" "}
              (from problem statement sponsors)
            </p>
          </h3>
          <p className="vertical-timeline-element-body">
            Problem statement will be release during our first briefing.
          </p>
          <ul className="vertical-timeline-element-body-list">
            <li>
              <b>Time</b>: 7:00 - 9:30 pm
            </li>
            <li>
              <b>Venue</b>: Online via Zoom (link will be sent to participants)
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="9 March"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <Icon
              name="tv"
              size="large"
              style={{
                width: "100%",
                height: "100%",
                marginTop: "30%",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Conjunct Workshop</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Systematic problem solving for the Social Sector
          </h4>
          <p className="vertical-timeline-element-body">
            In this interactive 45 mins workshop, participants will be exposed
            to an overview of the unique challenges and constraints that
            charities and social good organisations typically face within the
            sector, as well as introduced to frameworks and methodologies used
            to ensure that their ideas and solutions are aligned to the needs of
            the social sector.
          </p>
          <ul className="vertical-timeline-element-body-list">
            <li>
              <b>Time</b>: 8:00 pm
            </li>
            <li>
              <b>Venue</b>: Online workshop
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="17 March"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <Icon
              name="calendar check outline"
              size="large"
              style={{
                width: "100%",
                height: "100%",
                marginTop: "30%",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Close submissions</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="20 March"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <Icon
              name="paper plane"
              size="large"
              style={{
                width: "90%",
                height: "90%",
                marginTop: "30%",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Finale</h3>
          <p className="vertical-timeline-element-body">
            Wrap up of our Hack for Good event and winners will be announced.
          </p>
          <ul className="vertical-timeline-element-body-list">
            <li>
              <b>Time</b>: 1:30 pm
            </li>
            <li>
              <b>Venue</b>: Online workshop
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="h4g-sponsor-logos">
        <h3>Sponsors:</h3>
        <Image.Group size="small">
          <Image src={sponsorOsa} className="h4g-sponsor-osa-logo" />
          <Image src={sponsorSl2} />
          <Image src={sponsorPaypal} />
        </Image.Group>
      </div>
      <PdfRenderer file={booklet} />
      <Footer />
    </>
  );
};

export default Hack4GoodPage;
