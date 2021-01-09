import React from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer.js";
import conjunct from "../assets/Hack4GoodPage/conjunct.png";
import logo from "../assets/ProjectsPage/hglogo.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Icon } from "semantic-ui-react";

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
              <p>
                Date of Event: <b>March</b>
              </p>
              <br></br>
              <p>
                Developer Students' Club presents Hack For Good, a student-run
                virtual hackathon which seeks to inspire students to learn and
                use technology for social causes. Our innovation challenge is
                unique in that we are posing real problem statements provided by
                NPOs in Singapore. Participating teams are expected to create
                technological prototypes as part of their solution to tackle
                their chosen statement and directly benefit the NPO backing each
                statement.
              </p>
              <br />
              <p>Look out for more details nearer to the event date!</p>
              <span>In collaboration with Conjunct Consulting</span>
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
          <p>
            In this interactive 45 mins workshop, participants will be exposed
            to an overview of the unique challenges and constraints that
            charities and social good organisations typically face within the
            sector, as well as introduced to frameworks and methodologies used
            to ensure that their ideas and solutions are aligned to the needs of
            the social sector.
          </p>
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
        </VerticalTimelineElement>
      </VerticalTimeline>
      <Footer />
    </>
  );
};

export default Hack4GoodPage;
