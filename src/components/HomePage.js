import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import PageHeader from './PageHeader.js';
import workingtgt from '../assets/HomePage/workingtgt.png'
//import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                {<PageHeader />}
                <header class="home-header">
                    <div class="home-header__text-box">
                        <h1 class="home-heading-primary">
                            <span class="home-heading-primary--main">NUS Developer Student Clubs</span>
                            <span class="home-heading-primary--sub">#TECHFORGOOD</span>
                        </h1>
                    </div>
                </header>
                <section className="home-section-about">
                    <Grid columns={2} stackable textAlign='center'>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <div class="home-header__text-box">                             
                                    <h2 class="home-heading-secondary">
                                        Who Are We?
                                    </h2>
                                    <p>DSC NUS is made up of people from diverse backgrounds, majors, years of study, genders and races.<br/>We come together to push our mission of #TechforGood.</p>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={workingtgt} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Home;