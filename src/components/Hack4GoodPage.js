import React from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer.js";
import conjunct from "../assets/Hack4GoodPage/conjunct.png";
import dsclogo from "../assets/Hack4GoodPage/dsclogo.png";

const Hack4GoodPage = () => {
  return (
    <>
      <PageHeader />
      <header class="home-header projects-header">
        <div class="home-header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Hack 4 Good</span>
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
              <img src={dsclogo} alt="logo" style={{ width: "50%" }} />
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
              <span>
                In collaboration with{" "}
                <img
                  src={conjunct}
                  style={{ width: "15%", verticalAlign: "middle" }}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Hack4GoodPage;
