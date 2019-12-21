import React, { Component } from 'react';
import { Grid, Button, Divider } from 'semantic-ui-react';
import PageHeader from './PageHeader.js';
import Footer from './Footer.js'
import CarouselHome from './CarouselHome.js';
import { Link } from 'react-router-dom';
import whoarewe from '../assets/HomePage/whoarewe.jpg'
import whatwedo from '../assets/HomePage/whatwedo.jpg'

class Home extends Component {
    render() {
        return (
            <div>
                {<PageHeader />}
                <header class="home-header">
                    <div class="home-header__text-box">
                        <h1 class="home-heading-primary">
                            <span class="home-heading-primary--main">NUS Developer Student Clubs</span>
                            <Divider/>
                            <span class="home-heading-primary--sub">#TECHFOR
                                <span style={{color:"#ea3f31"}}>G</span>
                                <span style={{color:"#4285f4"}}>O</span>
                                <span style={{color:"#f4b400"}}>O</span>
                                <span style={{color:"#0f9d58"}}>D</span>
                            </span>
                        </h1>
                    </div>
                </header>
                <section className="home-section-whoarewe">
                    <Grid columns={2} stackable textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <div class="home-header__text-box">                             
                                    <h2 class="home-heading-secondary">
                                        Who Are We?
                                    </h2>
                                    <p>DSC NUS is made up of people from diverse backgrounds, majors, years of study, genders and races.<br/>We come together to push our mission of #TechforGood.</p>
                                    <Button 
                                        color="yellow" 
                                        onClick={this.handleItemClick}
                                        as={Link}
                                        to='/team'
                                        className="home-button"
                                        size='huge'>
                                        <div class="home-button-text">Our Team</div>
                                    </Button>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={whoarewe} alt="Who Are We"/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </section>
                <section className="home-section-whatwedo">
                    <Grid columns={2} stackable textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <img class="ui fluid image" alt="What We Do" src={whatwedo} />  
                            </Grid.Column>
                            <Grid.Column>
                                <div class="home-header__text-box">                             
                                        <h2 class="home-heading-secondary">
                                            What we do?
                                        </h2>
                                        <p>Our team have a shared purpose and drive to help local communities thrive.  We strive to bring technology to the people who have limited access, giving them more opportunities to lead better lives. </p>
                                        <Button 
                                        color="yellow"
                                        onClick={this.handleItemClick}
                                        as={Link}
                                        to='/about'
                                        size='huge'
                                        className="home-button">
                                            <div class="home-button-text">About Us</div>
                                        </Button>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </section>
                <section className="home-section-recent-events">
                    <Grid.Row>
                        <h2 class="home-our-recent-events">
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