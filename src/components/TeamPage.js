import React from 'react';
import { } from 'semantic-ui-react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import shawnten from '../assets/TeamPage/shawnten.jpg';

const TeamPage = () => (
    <div>
        {<PageHeader/>}
        <header class="home-header team-header">
            <div class="home-header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Our Core Team</span>
                </h1>
            </div>
        </header>
        <div className="section-header section-blue">
            <h2 class="heading-secondary">
                Leads
            </h2>
            <p>The Leads...</p>
        </div>
        <section className="section">
            <div className="section-teampage">
                <div className="card">
                    <div class="card__image-box">
                        <img src={shawnten} alt="Shawn Ten" className="card__image"/>
                    </div>
                    <div className="card__content--center">
                        <h3 class="heading-tertiary">
                            Shawn Ten
                        </h3>
                        <p>Internal Lead</p>
                        <p>shawnten.dscnus@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>    

        <div className="section-header section-green">
            <h2 class="heading-secondary">
                Internal Team
            </h2>
            <p>TThe Internal Division focuses on running the club and managing activities and events related to the school and students. Find out more here.</p>
        </div>
        <section className="section">
            <div className="section-teampage">
                <div className="card">
                    <div class="card__image-box">
                        <img src={shawnten} alt="Shawn Ten" className="card__image"/>
                    </div>
                    <div className="card__content--center">
                        <h3 class="heading-tertiary">
                            Shawn Ten
                        </h3>
                        <p>Internal Lead</p>
                        <p>shawnten.dscnus@gmail.com</p>
                    </div>
                </div>
                <div className="card">
                    <div class="card__image-box">
                        <img src={shawnten} alt="Shawn Ten" className="card__image"/>
                    </div>
                    <div className="card__content--center">
                        <h3 class="heading-tertiary">
                            Shawn Ten
                        </h3>
                        <p>Internal Lead</p>
                        <p>shawnten.dscnus@gmail.com</p>
                    </div>
                </div>
                <div className="card">
                    <div class="card__image-box">
                        <img src={shawnten} alt="Shawn Ten" className="card__image"/>
                    </div>
                    <div className="card__content--center">
                        <h3 class="heading-tertiary">
                            Shawn Ten
                        </h3>
                        <p>Internal Lead</p>
                        <p>shawnten.dscnus@gmail.com</p>
                    </div>
                </div>
                <div className="card">
                    <div class="card__image-box">
                        <img src={shawnten} alt="Shawn Ten" className="card__image"/>
                    </div>
                    <div className="card__content--center">
                        <h3 class="heading-tertiary">
                            Shawn Ten
                        </h3>
                        <p>Internal Lead</p>
                        <p>shawnten.dscnus@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>

        <div className="section-header section-red">
            <h2 class="heading-secondary">
                External Team
            </h2>
            <p>The External Division focuses on all activities related to the local organizations, communities and businesses outside of the school. Find out more here.</p>
        </div>
        <section className="section">
            <div className="section-teampage">
                <div className="card">
                    <div class="card__image-box">
                        <img src={shawnten} alt="Shawn Ten" className="card__image"/>
                    </div>
                    <div className="card__text-box">
                        <h3 class="heading-tertiary">
                            Shawn Ten
                        </h3>
                        <p>Internal Lead</p>
                        <p>shawnten.dscnus@gmail.com</p>
                    </div>
                </div>
                <div className="card">
                    <div class="card__image-box">
                        <img src={shawnten} alt="Shawn Ten" className="card__image"/>
                    </div>
                    <div className="card__text-box">
                        <h3 class="heading-tertiary">
                            Shawn Ten
                        </h3>
                        <p>Internal Lead</p>
                        <p>shawnten.dscnus@gmail.com</p>
                    </div>
                </div>
                <div className="card">
                    <div class="card__image-box">
                        <img src={shawnten} alt="Shawn Ten" className="card__image"/>
                    </div>
                    <div className="card__text-box">
                        <h3 class="heading-tertiary">
                            Shawn Ten
                        </h3>
                        <p>Internal Lead</p>
                        <p>shawnten.dscnus@gmail.com</p>
                    </div>
                </div>
                <div className="card">
                    <div class="card__image-box">
                        <img src={shawnten} alt="Shawn Ten" className="card__image"/>
                    </div>
                    <div className="card__text-box">
                        <h3 class="heading-tertiary">
                            Shawn Ten
                        </h3>
                        <p>Internal Lead</p>
                        <p>shawnten.dscnus@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
        {<Footer />}
    </div>
);

export default TeamPage;