import React from 'react';
import {Grid } from 'semantic-ui-react';
import PageHeader from './PageHeader';

const AboutUsPage = () => (
    <div>
        {<PageHeader/>}
        <header class="about-header">
            <div class="about-header__text-box">
                <h1 class="about-heading-primary">
                    <span class="about-heading-primary--main">About DSC NUS</span>
                    <span class="about-heading-primary--sub">Our mission</span>
                </h1>
            </div>
        </header>
        <section>
            <Grid>
                <Grid.Row verticalAlign = "middle">
                    <Grid.Column>
                        <div> 
                            <iframe frameborder="0" aria-label="YouTube Video, Developer Student Clubs Leaders Summit - Goa 2018" src="https://www.youtube.com/embed/wTLe8nwJ_Lw" allowfullscreen=""></iframe>
                        </div>
                    </Grid.Column>
                    <Grid.Column>

                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </section>
    </div>
);

export default AboutUsPage;