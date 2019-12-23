import React, { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import PageHeader from './PageHeader.js';
import Footer from './Footer.js'
import CarouselHome from './CarouselHome.js';
import whoarewe from '../assets/HomePage/whoarewe.jpg'
import whatwedo from '../assets/HomePage/whatwedo.jpg'

class Home extends Component {
    render() {
        return (
            <div>
                {<PageHeader />}
                <header class="home-header">
                    <div class="home-header__text-box">
                        <h1 class="heading-primary">
                            <span class="heading-primary--main">NUS Developer Student Clubs</span>
                            <Divider/>
                            <span class="heading-primary--sub">#TECHFOR
                                <span style={{color:"#ea3f31"}}>G</span>
                                <span style={{color:"#4285f4"}}>O</span>
                                <span style={{color:"#f4b400"}}>O</span>
                                <span style={{color:"#0f9d58"}}>D</span>
                            </span>
                        </h1>
                    </div>
                </header>
                <section className="section">
                    <div className="section__content">
                        <div class="section__text-box">                             
                            <h2 class="heading-secondary">
                                Who Are We?
                            </h2>
                            <p>DSC NUS is made up of people from diverse backgrounds, majors, years of study, genders and races.<br/>We come together to push our mission of #TechforGood.</p>
                            <a href="/team" className="btn btn-yellow">Our Team</a>
                        </div>
                        <div className="section__image-box">
                            <img src={whoarewe} alt="Who Are We" className="section__image"/>
                        </div>
                    </div>
                </section>
                <section className="section section-blue">
                    <div className="section__content">
                        <div class="section__image-box">     
                            <img className="section__image" alt="What We Do" src={whatwedo} />  
                        </div>
                        <div class="section__text-box">                             
                            <h2 class="heading-secondary">
                                What we do?
                            </h2>
                            <p>Our team have a shared purpose and drive to help local communities thrive.  We strive to bring technology to the people who have limited access, giving them more opportunities to lead better lives. </p>
                            <a href="/team" className="btn btn-yellow">About Us</a>
                        </div>
                    </div>
                </section>
                <section className="section-vertical">
                    <Grid.Row>
                        <h2 class="heading-secondary recent-events__header">
                            Recent Events
                        </h2>
                    </Grid.Row>
                    {<CarouselHome/>}
                </section>
                {<Footer />}
            </div>
        )
    }
}

export default Home;