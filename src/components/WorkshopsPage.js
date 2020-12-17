import React, { Component, Fragment } from "react";
import { Card, Image, Responsive } from "semantic-ui-react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import webdev1 from "../assets/WorkshopsPage/webdev1.png";
import webdev2 from "../assets/WorkshopsPage/webdev2.png";
import data0 from "../assets/WorkshopsPage/data0.png";
import data1 from "../assets/WorkshopsPage/data1.png";
import data2 from "../assets/WorkshopsPage/data2.png";
import data3 from "../assets/WorkshopsPage/data3.png";
import joanna from "../assets/WorkshopsPage/joanna.jpg";
import kangliang from "../assets/WorkshopsPage/kangliang.jpg";
import turtletree from "../assets/WorkshopsPage/turtletree.jpg";
import james from "../assets/WorkshopsPage/james.jpg";
import gracepark from "../assets/WorkshopsPage/gracepark.jpg";
import theodoric from "../assets/WorkshopsPage/theodoric.jpg";
import adila from "../assets/WorkshopsPage/adila.jpg";
import izzy from "../assets/WorkshopsPage/izzy.jpg";

const industryTalk1 = [
  {
    topic: "Social Good",
    img: kangliang,
    name: "Koh Kang Liang",
    position: "CEO",
    company: "Swapie",
  },
  {
    topic: "IT Consultancy",
    img: joanna,
    name: "Joanna Reijgersberg-Siew",
    position: "Senior Director, AI & IoT Solutions Lead",
    company: "Avanade",
  },

  {
    topic: "Environment",
    img: turtletree,
    name: "Fengru Lin & Max Rye",
    position: "Founder & Chief Strategist",
    company: "TurtleTree Labs",
  },
];

const industryTalk2 = [
  {
    topic: "Health Tech",
    img: gracepark,
    name: "Grace Park",
    position: "Co-Founder & President",
    company: "DocDoc",
  },
  {
    topic: "Education",
    img: izzy,
    img2: adila,
    name: "Izzy Ngo & Adila Sayyed",
    position: "Co-Founders",
    company: "VERE360",
  },
  {
    topic: "Education",
    img: james,
    name: "James Chia",
    position: "CEO",
    company: "ArcLab",
  },
  {
    topic: "Mental Health",
    img: theodoric,
    name: "Theodoric Chew",
    position: "CEO",
    company: "Intellect",
  },
];

const IndustryTalkSpeakers = ({ arrOfSpeakers, smallerImg }) => {
  return (
    <Fragment>
      {arrOfSpeakers.map((speaker) => (
        <Card className="speaker-card" raised>
          <Card.Content extra textAlign="center">
            <strong>{speaker.topic}</strong>
          </Card.Content>
          <Card.Content className="speaker-inner-card" textAlign="center">
            <Image
              circular
              className={"speaker-img"}
              size="small"
              style={{ width: speaker.img2 && smallerImg && "120px" }}
              src={speaker.img}
            />
            {speaker.img2 && (
              <Image
                circular
                className={"speaker-img"}
                size="small"
                style={{ width: speaker.img2 && smallerImg && "120px" }}
                src={speaker.img2}
              />
            )}
            <div className="speaker-details">
              <Card.Header>{speaker.name}</Card.Header>
              <Card.Meta>
                {speaker.position}
                <br />
                <strong>{speaker.company}</strong>
              </Card.Meta>
            </div>
          </Card.Content>
        </Card>
      ))}
    </Fragment>
  );
};

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
              <span class="heading-primary--main">Our Upcoming Events</span>
            </h1>
          </div>
        </header>

        <div className="section-header section-green">
          <h2 class="heading-secondary">Machine Learning</h2>
          <p>
            In this academic year, DSC Technology Team will conduct these Data
            Analytics workshops accessible to any NUS students from any faculty
            or level.
          </p>
        </div>
        <section className="section">
          <div className="projects">
            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <img src={data0} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">
                  Introduction to Python and Data Science Libraries
                </h2>
                <p>
                  Python is our language of choice for Data Analytics. In our
                  first introductory workshop, we'll be getting everyone up to
                  speed with the fundamentals of programming in Python, as well
                  as to set up a proper data science environment on your
                  machine. From there, you'll have your bases covered to explore
                  the rest of the data science ecosystem.
                </p>
                <p>
                  Topics covered: Basic data structures in python, utilizing
                  third party libraries, Numpy, Matplotlib, Pandas
                </p>
                <br></br>
                <p>
                  <ul>
                    <li>
                      <strong>Date</strong>: Week 9, 16 October, Friday
                    </li>
                    <li>
                      <strong>Time</strong>: 7.00pm - 10.00pm
                    </li>
                    <li>
                      <strong>Venue</strong>: Online Workshop (Zoom, live stream
                      through youtube)
                    </li>
                  </ul>
                </p>
                <br />
                <p>
                  Click{" "}
                  <a href="https://nus.syd1.qualtrics.com/jfe/form/SV_5bVWo5WYSngIjTn">
                    here
                  </a>{" "}
                  to sign up for the workshop.
                </p>
              </div>
            </div>
            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <img src={data1} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">Data Science 2</h2>
                <p>
                  In this workshop we will build upon the data science libaries
                  we learnt in workshop 1 to analyse data and draw meaningful
                  conclusions from it.
                </p>
                <p>Topics covered: Machine Learning and regression.</p>
                <br></br>
                <p>
                  <ul>
                    <li>
                      <strong>Date</strong>: Week 10, 23 October, Friday
                    </li>
                    <li>
                      <strong>Time</strong>: 7.00pm - 10.00pm
                    </li>
                    <li>
                      <strong>Venue</strong>: Online Workshop (Zoom, live stream
                      through youtube)
                    </li>
                    <li>
                      <strong>Pre-requisite</strong>: Basic python knowledge OR
                      our first workshop materials
                    </li>
                  </ul>
                </p>
                <br />
                <p>
                  Click{" "}
                  <a href="https://nus.syd1.qualtrics.com/jfe/form/SV_5bVWo5WYSngIjTn">
                    here
                  </a>{" "}
                  to sign up for the workshop.
                </p>
              </div>
            </div>

            <div className="card-horizontal projects__project">
              <div className="card-horizontal__image-box">
                <img src={data3} alt="event" />
              </div>
              <div className="card-horizontal__content">
                <h2 class="heading-secondary">Data Science 3</h2>
                <p>
                  In this workshop we will be extending Machine learning to
                  cover classification techniques. We will teach you the most
                  popular classification algorithms and introduce deep learning
                  to you guys!
                </p>
                <p>
                  Topics covered: Machine Learning, classification and deep
                  learning.
                </p>
                <br></br>
                <p>
                  <ul>
                    <li>
                      <strong>Date</strong>: Week 11, 30 October, Friday
                    </li>
                    <li>
                      <strong>Time</strong>: 7.00pm - 10.00pm
                    </li>
                    <li>
                      <strong>Venue</strong>: Online Workshop (Zoom, live stream
                      through youtube)
                    </li>
                    <li>
                      <strong>Pre-requisite</strong>: Basic python knowledge OR
                      our first workshop materials
                    </li>
                  </ul>
                </p>
                <br></br>
                <p>
                  Click{" "}
                  <a href="https://nus.syd1.qualtrics.com/jfe/form/SV_5bVWo5WYSngIjTn">
                    here
                  </a>{" "}
                  to sign up for the workshop.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-header section-blue">
          <h2 class="heading-secondary">Industry Talks</h2>
        </div>
        <div className="projects">
          <div className="card-horizontal projects__project">
            <div className="card-horizontal__image-box">
              <img src={webdev1} alt="event" />
            </div>
            <div className="card-horizontal__content full-width">
              <h2 class="heading-secondary">Industry Talks 1</h2>
              <p>
                Want to know the role of technology in the fields of IT
                Consulting, Volunteering and the Environment? Some of the
                speakers we are inviting include the CEO of Swappie, Senior
                Director, AI & IoT Solutions Lead of Avanade and Founder & Chief
                Strategist of TurtleTree Labs.
              </p>
              <br />
              <Responsive minWidth={800}>
                <Card.Group>
                  <IndustryTalkSpeakers arrOfSpeakers={industryTalk1} />
                </Card.Group>
              </Responsive>
              <Responsive maxWidth={799}>
                <IndustryTalkSpeakers arrOfSpeakers={industryTalk1} />
              </Responsive>
              <br />
              <br />
              <p>
                <ul>
                  <li>
                    <strong>Date</strong>: Week 10, 22 October, Thursday
                  </li>
                  <li>
                    <strong>Time</strong>: 7.30pm - 9.00pm
                  </li>
                  <li>
                    <strong>Venue</strong>: Online
                  </li>
                </ul>
              </p>
              <br></br>
              <p>
                Click{" "}
                <a href="https://nus.syd1.qualtrics.com/jfe/form/SV_5ss4dAyqi5wyG21">
                  here
                </a>{" "}
                to sign up for the Industry Talk.
              </p>
            </div>
          </div>
          <div className="card-horizontal projects__project">
            <div className="card-horizontal__image-box">
              <img src={webdev2} alt="event" />
            </div>
            <div className="card-horizontal__content full-width">
              <h2 class="heading-secondary">Industry Talks 2</h2>
              <p>
                Find out more about how technology plays a part in these
                sectors: Health Tech, Education and Mental Health! The speakers
                include the Co-Founder of DocDoc, Co-Founders of VERE360, and
                CEO of ArcLab and Intellect.
              </p>
              <br />
              <Responsive minWidth={800}>
                <Card.Group>
                  <IndustryTalkSpeakers
                    arrOfSpeakers={industryTalk2}
                    smallerImg={true}
                  />
                </Card.Group>
              </Responsive>
              <Responsive maxWidth={799}>
                <IndustryTalkSpeakers arrOfSpeakers={industryTalk2} />
              </Responsive>
              <br />
              <br />
              <p>
                <ul>
                  <li>
                    <strong>Date</strong>: Week 11, 29 October, Thursday
                  </li>
                  <li>
                    <strong>Time</strong>: 7.30pm - 9pm
                  </li>
                  <li>
                    <strong>Venue</strong>: Online
                  </li>
                </ul>
              </p>
              <br></br>
              <p>
                Click{" "}
                <a href="https://nus.syd1.qualtrics.com/jfe/form/SV_5ss4dAyqi5wyG21">
                  here
                </a>{" "}
                to sign up for the Industry Talk.
              </p>
            </div>
          </div>
        </div>

        {<Footer />}
      </div>
    );
  }
}

export default WorkshopsPage;
