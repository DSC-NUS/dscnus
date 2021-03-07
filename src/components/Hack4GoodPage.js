import React from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer.js";
import logo from "../assets/ProjectsPage/hglogo.png";
import sponsorOsa from "../assets/Hack4GoodPage/sponsor-osa.png";
import sponsorSl2 from "../assets/Hack4GoodPage/sponsor-sl2.png";
import sponsorPaypal from "../assets/Hack4GoodPage/sponsor-paypal.png";
import sponsorQuest from "../assets/Hack4GoodPage/sponsor-quest.png";
import monk from "../assets/Hack4GoodPage/panel-company-monk.png";
import better from "../assets/Hack4GoodPage/panel-company-better.png";
import ogp from "../assets/Hack4GoodPage/panel-company-ogp.png";
import jeremy from "../assets/Hack4GoodPage/panel-jeremy.jpg";
import shawn from "../assets/Hack4GoodPage/panel-shawn.jpg";
import alexis from "../assets/Hack4GoodPage/panel-alexis.jpg";
import gift from "../assets/Hack4GoodPage/ps-gift.jpg";
import girls from "../assets/Hack4GoodPage/ps-girls.png";
import access from "../assets/Hack4GoodPage/ps-access.jpg";
import booklet from "../assets/Hack4GoodPage/booklet.pdf";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Grid, Icon, Image, Divider } from "semantic-ui-react";
import PdfRenderer from "./PdfRenderer";

const panelJudges = [
  {
    profileImg: jeremy,
    name: "Jeremy Au",
    accreditations: [
      "Head of Strategic Projects, Monk's Hill Ventures.",
      "Harvard MBA.",
      "Forbes 30 Under 30.",
    ],
    companyImg: monk,
  },
  {
    profileImg: shawn,
    name: "Shawn Low",
    accreditations: [
      "Co-founder of Better.com, valued at $4 billion as of their Series D raise.",
      "Amongst Better’s accolades include LinkedIn's #1 Start-Up in the US, Forbes Fintech 50 and CNBC Disruptor 50.",
      "Former BCG Consultant",
    ],
    companyImg: better,
  },
  {
    profileImg: alexis,
    name: "Alexis Goh",
    accreditations: [
      "Software Engineer at Open Government Products.",
      "Stanford Master of Computer Science (Artificial Intelligence).",
      "Previously a computer vision researcher at Whiterabbit.ai",
    ],
    companyImg: ogp,
  },
];

const PanelJudgeComponent = ({ judge }) => (
  <div class="h4g-panel-judges-component">
    <img
      src={judge.profileImg}
      alt="judge"
      class="h4g-panel-judges-component-profile-img"
    />
    <h4 class="h4g-panel-judges-component-name">{judge.name}</h4>
    <ul>
      {judge.accreditations.map((accreditation) => (
        <li>{accreditation}</li>
      ))}
    </ul>
    <img
      src={judge.companyImg}
      alt="company"
      style={{ width: "50%" }}
      class="h4g-panel-judges-component-company-img"
    />
  </div>
);

const problemStatements = [
  {
    img: access,
    description: (
      <p>
        <b>Access</b> is a ground-up organisation providing non-academic
        opportunities to underserved students through externships and
        mentorships.
      </p>
    ),
    problem:
      "Traditionally, industry interest and understanding have been assessed by looking at past experiences on the resumes of youths. How can we better reflect their interest and understanding of different industries and jobs for better job matching?",
  },
  {
    img: girls,
    description: (
      <p>
        Founded in 2007 by Adriana Gascoigne, <b>Girls in Tech</b> is a
        nonprofit organization dedicated to eliminating the gender gap in tech.
      </p>
    ),
    problem:
      "How do we get young girls interested in STEM (Science, Technology, Engineering, and Mathematics) from an early age? (Ideas for solutions can be STEM-related gamification, toys, video content etc.)",
  },
  {
    img: gift,
    description: (
      <p>
        <b>Gift-It-Forward</b> is a social enterprise in Singapore. It aims to
        create more meaningful gifts and teach kids about generosity and helping
        others, while simplifying the event planning and gift giving experience
        for parents.
      </p>
    ),
    problem:
      "Kids, who receive most of these gifts through birthday celebrations should also learn to think about the impact this has on their environment and community. Design a solution that makes gifting more meaningful for both the recipient and communities in need, while reducing gift waste.",
  },
  {
    img: sponsorOsa,
    description: (
      <p>
        The <b>NUS Office of Student Affairs (OSA)</b> seizes every opportunity
        and dedicates itself to provide and support the NUS student community in
        all aspects of student life outside-of-the-classroom, including student
        services, housing admission and residential life, student organisations,
        student leaders’ training, community engagement, integration and service
        learning, student support and wellness, as well as disability support.
      </p>
    ),
    problem:
      "How can we engage youths to adopt and use Asset-Based Community Development or a strength-based approach for community projects instead of the usual problem/gaps-based approach?",
    problem2:
      "How can we tap on technology to get youths to learn, understand and appreciate diversity/difference and participate in creating a more inclusive space?",
  },
];

const ProblemStatementsComponent = ({ problemStatement }) => (
  <div class="h4g-problem-statement-component card-horizontal projects__project">
    <div class="h4g-problem-statement-component-img-container">
      <img src={problemStatement.img} />
    </div>
    <div class="h4g-problem-statement-description-container">
      {problemStatement.description}
      <Divider />
      {problemStatement.problem}

      {problemStatement.problem2 && (
        <>
          <br />
          <br />
          {problemStatement.problem2}
        </>
      )}
    </div>
  </div>
);

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
              <b>Venue</b>: Online
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <h3 class="h4g-section-title">Problem Statements</h3>
      <div class="h4g-problem-statements-container">
        {problemStatements.map((problemStatement) => (
          <ProblemStatementsComponent problemStatement={problemStatement} />
        ))}
      </div>
      <h3 class="h4g-section-title">Panel Judges</h3>
      <Grid
        stackable
        centered
        padded
        columns={3}
        className="h4g-panel-judges-component-grid"
      >
        {panelJudges.map((judge) => (
          <Grid.Column
            centered
            tablet={16}
            largeScreen={5}
            widescreen={5}
            class="h4g-panel-judges-component-grid-column"
          >
            <PanelJudgeComponent judge={judge} />
          </Grid.Column>
        ))}
      </Grid>
      <div className="h4g-sponsor-logos">
        <h3>Sponsors:</h3>
        <Image.Group size="small">
          <Image src={sponsorOsa} className="h4g-sponsor-osa-logo" />
          <Image src={sponsorQuest} />
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
