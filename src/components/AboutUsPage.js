import React from 'react';
import { Grid, Divider, GridColumn } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import different from '../assets/AboutUsPage/different.jpg'


const AboutUsPage = () => (
    <div>
        {<PageHeader/>}
        <header class="about-header">
            <div class="about-header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">About DSC NUS</span>
                </h1>
                <section>
                    <Grid columns={2}>
                        <Grid.Column>
                            <h2 class="mission-vision">
                                Our Mission
                            </h2>
                            <p class="paragraph-description--mission-vision">Cultivate empathetic learners of technology to engage and impact communities</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h2 class="mission-vision">
                                Our Vision
                            </h2>
                            <p class="paragraph-description--mission-vision">DSC NUS is an inclusive community, nurturing learners of technology to engage and impact communities</p>
                        </Grid.Column>
                    </Grid>
                </section>
            </div>
        </header>
        <section>
            <Grid stackable columns={2}>
                <Grid.Row verticalAlign = "middle">
                    <Grid.Column>
                        <div> 
                            {/* TODO: Change to more appropriate video */}
                            <iframe title="Developer Student Clubs Leaders Summit - Goa 2018" 
                            frameborder="0" 
                            aria-label="YouTube Video, Developer Student Clubs Leaders Summit - Goa 2018" 
                            src="https://www.youtube.com/embed/wTLe8nwJ_Lw" 
                            allowfullscreen=""
                            class="dsc-video--whatisdsc"></iframe>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <h2 class="heading-secondary">
                            What is DSC?
                        </h2>
                        <p class="paragraph-description--whatisdsc">Developer Student Clubs (DSC) is a programme presented by Google Developers. DSCs are university-based community groups where students can experience personal growth through developing solutions for their communities. Google does not own or manage DSCs- they are run by the Lead from each university. Watch the video to learn more!
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row verticalAlign = "middle">
                    <Grid.Column>
                        <h2 class="heading-secondary--different">
                            How is DSC NUS different?
                        </h2>
                        <p class="paragraph-description--howisdscnusdifferent">We set ourselves apart from the other DSC chapters by focusing on developing diverse solutions (not restricted to mobile and apps) for Non-Profit Organizations. Areas we are interested in include but are not limited to: the environment, education, elderly, children, healthcare, special needs and anything related to benefiting communities.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                    <img 
                    class="ui fluid image" 
                    alt="What We Do" 
                    src={different} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
        <section >
            <Grid.Row verticalAlign="middle">
                <div class="section-howwestart">
                    <h1 class="heading-secondary--start">
                        How did we start?
                    </h1>
                    <p class="paragraph-description--howwestart">
                        Our Lead (Jason Yip) signed up to represent Developer Student Club NUS and was fortunate enough attend the DSC Southeast Asia Summit in Kuala Lumpur this year. The 7 Leads from Singapore had the opportunity to meet other Leads from SEA and Googlers from all over the world! Check out the life-changing event.
                    </p>
                    <section>
                        <iframe title="Developer Student Clubs Leaders Summit - Goa 2018" 
                                frameborder="0" 
                                src="https://www.youtube.com/embed/lBMvXIsTVDQ"
                                allowfullscreen=""
                                class="dsc-video--howwestart">
                        </iframe>
                    </section>

                </div>
            </Grid.Row>
        </section>
        {<Footer />}
    </div>
);

export default AboutUsPage;